const express = require('express')
const path = require('path')
const app = express();
const port = 800;

app.set('view engine','pug');
app.set('views',path.join(__dirname,'webPages'))

app.get('/',(req,res) => {
    res.render('index');
})
app.get('/funny',(req,res) =>{
    res.render('funny')
})
app.get('/love',(req,res) =>{
    res.render('love')
})
app.get('/sad',(req,res) =>{
    res.render('sad')
})
app.get('/motivation',(req,res) =>{
    res.render('motivation')
})
app.get('/MSD',(req,res) =>{
    res.render('MSD')
})

app.listen(port , ()=>{
    console.log('Server is running on port ' + port);
})