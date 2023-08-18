const express = require('express') ; 
const app = express() ;
app.use( express.json()) ; 
app.use(
    express.urlencoded({
      extended: true,
    })
  );
  
  app.use(function(req, res, next) {
    console.log( res.header) ; 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get("/" , ( req , res )=>{
    const data = { name : "decostar"} 
    res.send( data   ) ; 
})

app.listen( 5000 , ()=> console.log( " started ")) ;