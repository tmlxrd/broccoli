const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subjectSchema = mongoose.model(
  "subjects",
  new Schema({
    teachersId:Array,
    subjectName:String,
    sections:Array
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
    subjectSchema
}