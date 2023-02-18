const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug',params);
})
app.post('/', (req, res)=>{
    console.log(req.body);
    const params = {'message': 'FORM SUBMITTED SUCCESFULLY'}
    res.status(200).render('index.pug',params);
})


// Our pug demo end point
// app.get("/demo",(req, res)=>{
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
// });
// app.get("/",(req, res)=>{
//     res.send("THIS IS HOME PAGE OF MY FIRST EXPRESS APP")
// });
// app.get("/about",(req, res)=>{
//     res.send("THIS IS ABOUT PAGE OF MY FIRST EXPRESS APP")
// });
// app.post("/about",(req, res)=>{
//     res.status(200).send("THIS IS post request of about PAGE OF MY FIRST EXPRESS APP")
// });
// app.post("/about",(req, res)=>{
//     res.send("THIS IS post request of home PAGE OF MY FIRST EXPRESS APP")
// });

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});