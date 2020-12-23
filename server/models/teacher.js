const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teacherSchema = mongoose.model(
  "teachers",
  new Schema({
    role:{type:String,default:'teacher'},
    name:String,
    surname:String,
    middleName:String,
    image:String,
    bio:String
})
);

// const getUserById =  (id, callback)=> {
//     console.log(id)
//     userSchema.findById(id, callback);
// };

// const getUserByCode = (code,callback) =>{
//     userSchema.find({code:Number(code)},(error,data)=>callback(error,data))
// }

// const comparePass = (userPassword, userDbPassword,callback)=> {
// //   bcrypt.compare(userPassword,userDbPassword,(error,success)=>{
// //     if(error){
// //       throw error
// //     } else {
// //       callback(null,success)
// //     }
// //   })
// };

// const changePass = (newPass) =>{
//     console.log(newPass)
// }
const getTeacherById =  (id, callback)=> {
  teacherSchema.findById(id, callback);
};

const getTeacherByCode= (code,callback) =>{
  teacherSchema.find({code:code},(error,data)=>callback(error,data))
}

// const addUser = (userData, callback)=> {
// //   bcrypt.genSalt(10, (error, salt) => {
//     // bcrypt.hash(testData.password, salt, (error, hash) => {
//     //   if (error) {
//     //     throw error;
//     //   } else {
//     //     testData.password = hash;
//     userData.save(callback)
//     //   }
//     // });
// //   });
// };
module.exports = {
    teacherSchema,
    getTeacherById,
  getTeacherByCode,
}