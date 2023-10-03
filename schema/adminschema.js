const mongoose=require('mongoose')

const AdminSchema=mongoose.Schema({
    username:{
      type:String,
      required:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const admindatas=mongoose.model("admindatas",AdminSchema)

module.exports=admindatas