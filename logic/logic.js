const admin=require('../schema/adminschema')
const jwt=require('jsonwebtoken')
exports.Register=async(req,res)=>{
    const {username,password,mobile}=req.body

    try{
               

        const master=await admin.findOne({mobile})
        if(master){
            return res.status(401).json("Admin already existst try again")
        }
        else{
            const newmaster=await new admin({
                username,mobile,password
            })
            await newmaster.save()
            return res.status(200).json(newmaster)
        }
    }
    catch(err){
        return res.status(500).json(err)
    }
   

}

exports.Login=async(req,res)=>{
    const {mobile,password}=req.body

    try{
          const user=await admin.findOne({mobile,password})
          if(!user){
            return res.status(401).json("user does not exist in the database please Register")
          }
          else{
             
                  const token=jwt.sign({loginacno:mobile},"super")
                  console.log(token);
                  return res.status(200).json({user:user,token:token})


          }
    }
    catch(err){
        return res.status(500).json(err)
    }
}