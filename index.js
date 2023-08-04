import express from "express"
import bodyParser from "body-parser"    

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var listD=[];
var listW=[];

app.get("/",(req,res)=>{
    res.render("index.ejs",{toDoListD:listD});
});

app.get("/work",(req,res)=>{
    res.render("work.ejs",{toDoListW:listW});
});

function addToListD(req,res)
{
    var task ={
        taskText:req.body["taskD"],
        date:new Date().toLocaleDateString()
    }
    listD.push(task);
}

function addToListW(req,res)
{
    var task ={
        taskText:req.body["taskW"],
        date:new Date().toLocaleDateString()
    }
    listW.push(task); 
}

app.post("/",(req,res)=>{
    addToListD(req,res);
    res.render("index.ejs",{toDoListD:listD});
})

app.post("/work",(req,res)=>{
    addToListW(req,res);
    res.render("work.ejs",{toDoListW:listW});
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})