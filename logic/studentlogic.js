const student = require("../schema/studentschema");
const jwt=require('jsonwebtoken')
exports.StudentRegister = async (req, res) => {
  const { username, email, mobile, password } = req.body;
  const video = [];

  try {
    const user = await student.findOne({ email });
    if (user) {
      return res
        .status(401)
        .json("user already registered with this this email");
    } else {
      const newuser = await new student({
        username,
        email,
        mobile,
        password,
        video,
      });
      await newuser.save();
      return res.status(200).json("Registration successful");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.StudentLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await student.findOne({ email, password });
      if(!data){
        return res.status(404).json("user not found in the database")
      }
      else{
        const token =jwt.sign({loginacno:email},"super")
        return res.status(200).json({data:data,token:token})
      }
  } catch (err) {
    return res.status(500).json(err);
  }
};
