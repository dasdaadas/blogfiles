import express from "express";
import bodyParser from "body-parser";



const app = express();
const port = 4000;


//middle-ware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.static("views"));
  

app.get('/',(req,res)=>{
       
     res.render('index.ejs');

})


app.get("/authenticate",(req,res)=>{
        res.render('authenticate.ejs');
})
// var userSignedIn = false;
// app.get('/',(req,res)=>{

//        if(userSignedIn){
//           res.render('index.ejs',{
//                  userSignedIn: true,
//           });
//        } else {
//           res.render('index.ejs',{
//                userSignedIn: false,
//        });
//      }
// })






app.listen(port,()=>{
     console.log(`Server running at Port: ${port}`);
})



// step1: Create a route/Authenticate and render authenticate.ejs
// step2: authenticate ejs (inside run the firebase sdks and google authentications for sign and sign out)
//step3 : create a post req method and to receive the authentication status.
// step4: update the user Signed in variable
//
