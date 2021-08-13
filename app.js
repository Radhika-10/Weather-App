//<-------To run all file including hbs and js we will run server by nodemon src/app.js -e js hbh-->


const express = require("express");
const path = require("path");
const app = express();
//----> for partials to work we have to require hbs----->
const hbs = require("hbs");
const port = process.env.PORT || 8000;

//------>To run static website----->
 //public static path
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path))

//-------> setting views------>

app.set('view engine','hbs');

//---->changing name of folder views to templetes------>
const templates_path = path.join(__dirname,"../templates/views");
app.set('views',templates_path);

//---> registering the partials---->
const partials_path = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partials_path);


//-----> Routing------>

//-----This index page for static website------> 
// app.get("/", (req, res) => {
//     res.send("welcome to Ruhi Channel");
// })

//--------->This index page for dynamic handlebars expresss--->
//-----> so here we use render instead of send-------->

app.get("/", (req, res) => {
         res.render("index.hbs");  // you can write hbs or not beacuse you already have set the view engine hbs so it automatically detect its hbs file.
     })

//-----This about page for static website------> 
// app.get("/about", (req, res) => {
//     res.send("welcome to about Channel");
// })


//--------->This about page for dynamic handlebars expresss--->
//-----> so here we use render instead of send-------->

app.get("/about",(req,res)=>{
    res.render("about");   // you can write hbs or not beacuse you already have set the view engine hbs so it automatically detect its hbs file.
})

app.get("/weather", (req, res) => {
    res.render("weather.hbs");
})

app.get("*", (req, res) => {
    res.render("404",{
        errMsg:"OOps page not found"
    });
})

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})