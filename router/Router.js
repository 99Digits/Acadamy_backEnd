const express=require('express')

const router=express.Router()

const masterauth=require('../logic/logic')
const studentauth=require('../logic/studentlogic')

router.post('/admin-register',masterauth.Register)
router.post('/login',masterauth.Login)

// student
router.post('/student_register',studentauth.StudentRegister)
router.post('/student_login',studentauth.StudentLogin)
module.exports=router