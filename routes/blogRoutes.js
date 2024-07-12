import express from "express";
import bodyParser from "body-parser";


const app = express();



//middleware

app.use(bodyParser.urlencoded({extended:true}));