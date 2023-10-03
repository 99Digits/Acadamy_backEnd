const mongoose=require('mongoose')

const StudentSchema=mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    mobile:{
        required:true,
        type:Number
    },
    password:{
        type:String,
        required:true
    },
    videos:[]
})

const students=mongoose.model("students",StudentSchema)
module.exports=students