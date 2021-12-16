const express=require('express')
const app=express();
const {products}=require('./data')

app.get('/' , (req,res)=>{
res.send('<h1>home page</h1> <a href="./api/products">products</a>')
})
app.get('/api/products/:productid',(req,res)=>{
 const {productid}=req.params
    const prod=products.find((product)=> product.id===Number(productid))

res.json(prod);

})


app.listen(5000,()=>{
    console.log('you have hit the server')
})

