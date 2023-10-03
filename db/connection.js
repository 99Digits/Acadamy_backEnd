const mongoose=require('mongoose')

DB=process.env.DATABASE
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log(`database is connected successfully`);
})