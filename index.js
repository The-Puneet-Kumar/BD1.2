const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.get('/shout',(req,res)=>{
  let name=req.query.name;
  let upperCaseName=name.toUpperCase();
  res.send(upperCaseName)

})
function getWelcomeMessage(){
  return "Welcome to our services";
}

app.get('/welcome',(req,res)=>{
res.send(getWelcomeMessage())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
