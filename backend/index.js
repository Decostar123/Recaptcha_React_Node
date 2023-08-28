const express = require('express') ; 
const app = express() ;
const cors = require('cors') ;
const axios = require( 'axios') ; 

require('dotenv').config() ; 

app.use( express.json()) ; 
app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
  // app.use(function(req, res, next) {
  //   console.log( res.header) ; 
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  //   next();
  // });

  app.get( "/verify-token" , ( req , res ) =>{
    const info = { data : true } ; 
    const infos = JSON.parse( info ) ; 
    res.send( infos )  ;
  })

  app.post("/verify-token", async (req,res) => {
    try{
      // THE SERVER IS JUST DOING ONE THING, 
      // IT IS SIMPLY VERIFYING BY SENDING THE TOKEN AND SECRET KEY 
      // THE TOKEN IS STARIGHT FORWARD 
      // THE SECRET KEY IS FROM THE USEREF 
        // console.log( ".......----") ; 
        // console.log( " request came in the verify token server  " , req ) ; 
        let token = req.body;
        // console.log( " 1  1 1 ") ; 
        console.log( req.body ) ; 
        console.log( token ) ; 

        // console.log( "------" , process.env.SECRET_KEY) ; 
        // replace APP_SECRET_KEY with your reCAPTCHA secret key
        let response = await axios.post( `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`);
        return res.status(200).json({
            success:true,
            message: "Token successfully verified",
            data: response.data
        }); 
    }catch(error){
        return res.json({
            success:false,
            message: "Error verifying token"
        })
    }
});

 

app.get("/" , ( req , res )=>{
    const data = { name : "decostar"} 
    res.send( data   ) ; 
})

app.listen( 5000 , ()=> {
  console.log( `The kwy is ${process.env.APP_SECRET_KEY}` ) ;
  console.log( " started ")
}) ;