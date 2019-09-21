const product_model= require("../models/product.models");

exports.create= function(req, res){
    let product = new product_model({
        name:"Tayouth"
    })

    product.save(function (error,success) {
        if(error)
            console.log("Error");
    });
    res.send(product)
}

exports.details= function(req, res){
    res.send("Details");
}

exports.list= function(req, res){
    res.send("List");
}