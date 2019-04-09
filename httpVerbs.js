let express = require("express");
let mongo = require("mongoose");
let

mongo.connect("mongodb://localhost/tutorial");
let db = mongo.connection;

let dataSchema = new mongo.Schema({
  id: Object,
  username: String,
});

let User = mongo.model('User', dataSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("I've connected")
});
let app = express();

app.get("/", function(req, res){

  User.find()
    .then(function(item){
      res.json(item)
    })
});

app.post("/", function(req, res){
  res.send("post request sent");
});

app.put("/", function(req, res){
  res.send("put request sent");
});

app.delete("/",function(req, res){
  res.send("delete request sent");
});

app.listen(3000, function(){
  console.log("Listening on port 3000...");
});
