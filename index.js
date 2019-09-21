const express = require ("express"); //import dependency called express
const app = express();
const product =require("./routes/product.route");
const mongoose = require('mongoose'); //imported mongose dependency.


// app.use("/:id", (req, res)=>{
//     console.log("JSON.stringify(req)=="+JSON.stringify(req.params));
//     res.send("===="+JSON.stringify(req.params));
// })
//
//
// // app.use("/", (request,response)=>{
// //     console.log(request.params);
// // console.log("/ entry");
// // console.log("JSON.stringify(request)=="+JSON.stringify(request.query));
// // response.send("Hello World="+JSON.stringify(request.query));
// // })

mongoose.connect('mongodb://localhost/productdb',{
    useNewUrlParser:true
})

const db = mongoose.connection;

db.on('error',console.error.bind(console,'connection.error'));
db.on('open', function(error, res){
    console.log('db connects')
});

app.use("/products", product);

app.listen(3000,()=>{

});