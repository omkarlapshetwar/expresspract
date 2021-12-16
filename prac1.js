const express=require('express')
const app=express();
const {products}=require('./data')

app.get('/' , (req,res)=>{
res.send('<h1>home page</h1> <a href="./api/products">products</a>')
})
app.get('/api/products:productid',(req,res)=>{
    const newproducts=products.map((products)=>{
 const {id,name,image}=products;
 return {id,name,image};
    })

res.json(newproducts);

})


app.listen(5000,()=>{
    console.log('you have hit the server')
})

