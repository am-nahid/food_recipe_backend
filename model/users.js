const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
const User = require('../schemas/userSchema')


dotenv.config()

const secretKey = process.env.JWT_SECRET_KEY 
const refreshSecretKey =  process.env.JWT_REFRESH_KEY 


const register = async (req, res) => {
    try{
    const data = req.body;
  
    const { email, password} = data;
    const user = await User.findOne({email:email})

  
    if (user != null) {
      return res.status(409).send({
        message: `user with email ${email} already exists`,
        statusCode: "Not Ok",
      });
    }
  
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
 
    const token = jwt.sign({ usedId:email }, secretKey, {
      expiresIn: "7D",
    });
    const refreshToken = jwt.sign({ usedId:email }, refreshSecretKey, {
      expiresIn: "7D",
    });
  
    const userInfo = {
      email: email,
      password: hashPassword,
      token: token,
      refreshToken: refreshToken,
    };
  
const newUser = await User.create(userInfo)

    let _id = newUser._id 
  
    res.send({
      message: "registration successfull",
      token: token,
      refreshToken: refreshToken,
      _id:_id,
      statusCode: "OK",
      email:email
    });
  
  }catch(err){
  console.log(err);
  res.status(500).send({
    message:"Internal server error",
    statusCode: 500
  })
  }
  };

  
const login= async (req,res)=>{
    const data = req.body;
   const {email,password} = data

   
 try{
  const user = await User.findOne({email:email})

   if(!user){
     return res.status(404).send({
       message: `user not found`,
       statusCode: "Not Ok",
     });
   }
 
   const hashedPassword = user.password
   const passwordMatch = await bcrypt.compare(password, hashedPassword)
   if(!passwordMatch){
     return res.status(401).send({
       message: "Incorrect password",
       statusCode: "Unauthorized"
     })
   }
   const token = jwt.sign({usedId:user.email}, secretKey,{expiresIn:"7d"})
   const refreshToken = jwt.sign({usedId:user.email}, refreshSecretKey,{expiresIn:"7d"})
   res.send({
     token: token,
     refreshToken: refreshToken,
     _id:user._id,
     statusCode: "OK",
     email:email
   })
   
 }catch(err){
   console.log(err);
   res.status(500).send({
     message:"Internal server error",
     statusCose: 500,
   })
 
 }
     
 }
 


  module.exports = {register, login}