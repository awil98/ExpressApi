let express = require("express");

let app = express();

app.get("/random/:min/:max", function(req, res){
  let min = parseInt(req.params.min);
  let max = parseInt(req.params.max);

  if(isNaN(min) || isNaN(max)){
    res.status(400);
    res.json({ error: "Bad Request. "});
    return;
  }
  let result = Math.round((Math.random() * (max -min)) + min);
  res.json({ result: result });
});

app.listen(3000, function(){
  console.log("App started on port 3000");
});
