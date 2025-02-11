const express = require("express");
const routerHome = require("./routes/homeroute");
const app = express();

app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}));

app.use("/",routerHome);

app.listen(5000, function() {
    console.log("Sistema em Execução"); 
})