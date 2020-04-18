
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const urlencodedParser = bodyParser.json();


let sequelize = require('./db');
let User = require('./models/user');
let Steve = require('./models/steve');
let Fight = require('./models/fight');
let SteveService = require('./services/steve');
let FightService = require('./services/fight');

const JwtService = require('./library/jwt_service');
const Auth = require('./library/auth');

sequelize.sync().then(()=>{
    app.listen(3003, function(){
        console.log("Server wait...");
    });
}).catch(err=>console.log(err));


app.post("/user/sign", urlencodedParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);
    let id = req.body.id;
    let token = JwtService.signToken(id);
    res.send(token);
});

app.post("/user/un-sign", urlencodedParser, function(req, res){
    if(!req.body) return res.sendStatus(400);
    let token = req.body.token;
    console.log(token);
    let id = JwtService.unSignToken(token);
    console.log(id.id);
    res.send(id);
});

app.get("/user/list", Auth.checkToken, function(req, res){
    User.findAll({raw: true }).then(data=>{
        res.send(data);
    }).catch(err=>console.log(err));
});

app.post("/user/register", urlencodedParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);

    let name = req.body.name;

    User.create({ name: name }).then(user=>{
        res.send(user);
    }).catch(err=>{
        res.send(err.errors)
    });
});

app.get("/user/:id", Auth.checkToken, function(req, res){
    const userid = req.params.id;
    User.findAll({where:{id: userid}, raw: true })
        .then(user=>{
            res.send(user)
        }).catch(err=>{
            res.send(err.errors)
        });
});

// Steve section

app.post("/steve/add", urlencodedParser, Auth.checkToken, function (req, res) {

    if(!req.body) return res.sendStatus(400);

    let name = req.body.name,
        userId = req.decoded.id;

    SteveService.create(name, userId).then(steve=>{
        res.send(steve);
    }).catch(err=>{
        res.send(err.errors)
    });
});

app.get("/steve/list", urlencodedParser, Auth.checkToken, function(req, res){
    Steve.findAll({raw: true }).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.send(err.errors)
    });
});

// End Steve section

// Fight section

app.post("/fight/add", urlencodedParser, Auth.checkToken, function (req, res) {

    if(!req.body) return res.sendStatus(400);

    let steveId = req.body.steveId,
        enemyId = req.body.enemyId;

    FightService.create(steveId, enemyId).then(steve=>{
        res.send(steve);
    }).catch(err=>{
        res.send(err.errors)
    });
});

app.get("/fight/list", urlencodedParser, Auth.checkToken, function(req, res){
    Fight.findAll({raw: true }).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.send(err.errors)
    });
});

// End Fight section

app.post("/edit", urlencodedParser, Auth.checkToken, function (req, res) {

    if(!req.body) return res.sendStatus(400);

    const username = req.body.name;
    const userage = req.body.age;
    const userid = req.body.id;
    User.update({name:username, age: userage}, {where: {id: userid} }).then(() => {
        res.redirect("/");
    }).catch(err=>{
        res.send(err.errors)
    });
});

app.post("/delete/:id", Auth.checkToken, function(req, res){
    const userid = req.params.id;
    User.destroy({where: {id: userid} }).then(() => {
        res.redirect("/");
    }).catch(err=>{
        res.send(err.errors)
    });
});
