const express=require('express')
const app=express();
const {products}=require('./data')

//app.get('/' , (req,res)=>{
//res.send('<h1>home page</h1> <a href="./api/products">products</a>')
//})
app.get('/api/v1/query',(req,res)=>{
 const {search,limit}=req.query;
let sortedproducts=[...products]

if(search){
    sortedproducts=sortedproducts.filter((product)=>{
        return product.name.startswith(search);
    })
}
if(limit){
    sortedproducts=sortedproducts.slice(0,Number(limit));
}


res.json(sortedproducts);

})


app.listen(5000,()=>{
    console.log('you have hit the server')
})

