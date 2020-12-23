const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const express = require("express");

const Schema = mongoose.Schema;

const userSchema = mongoose.model(
  "users",
  new Schema({
    role:{type:String,default:'student'},
	passportData:{
		ukr:{
			name:{type:String,default:""},
			surname:{type:String,default:""},
			middleName:{type:String,default:""}
	},
		eng:{
			name:{type:String,default:""},
			surname:{type:String,default:""},
			middleName:{type:String,default:""}}
    },
    code:Number,
	registerNumber:{type:Number,default:""},
	profession:{type:String,default:""},
    daybookNumber:{type:Number,default:""},
    image:{type:String,default:"https://i.imgur.com/oi13nIH.png"},
    entry:{type:String},
    course:{type:Number,default:0},
    formOfEducation:{type:String,default:"повна"}
})
);

const getUserById =  (id, callback)=> {
    console.log(id)
    userSchema.findById(id, callback);
};

const getUserByCode = (code,callback) =>{
    userSchema.find({code:Number(code)},(error,data)=>callback(error,data))
}

const comparePass = (userPassword, userDbPassword,callback)=> {
//   bcrypt.compare(userPassword,userDbPassword,(error,success)=>{
//     if(error){
//       throw error
//     } else {
//       callback(null,success)
//     }
//   })
};

const userIsAdmin = (id, callback) =>{
    userSchema.find({_id:id,role:"admin"},(error,data)=>callback(error,data))
}

const changePass = (newPass) =>{
    console.log(newPass)
}

const addUser = (userData, callback)=> {
//   bcrypt.genSalt(10, (error, salt) => {
    // bcrypt.hash(testData.password, salt, (error, hash) => {
    //   if (error) {
    //     throw error;
    //   } else {
    //     testData.password = hash;
    userData.save(callback)
    //   }
    // });
//   });
};
module.exports = {
  userSchema,
  getUserById,
  getUserByCode,
  comparePass,
  changePass,
  addUser,
  userIsAdmin
}