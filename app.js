const express=require("express");
const path=require("path")
const fs=require("fs")
const app=express();
const port=80;

app.use('/static', express.static('static'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views'))
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.render('index.pug')

})

app.post('/',(req,res)=>{

    name=req.body.name
    place=req.body.place
    fav_anime=req.body.fav_anime
    currently_watching=req.body.currently_watching

    let output= `Name of the person is ${name}, & is from ${place}. His favourite anime is ${fav_anime} and is currently watching ${currently_watching}`

    fs.writeFileSync('outputfile.txt', output)
    console.log(req.body)
    let params = {'message': 'Your form has been submitted successfully'}
    res.render('index.pug', params)
    

})

app.listen(port,()=>{
    console.log(`App is running at ${port}`)
})