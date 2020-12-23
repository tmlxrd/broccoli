const express = require("express");
const router = express.Router();
const resSec = require("../../common/response-security");
const validation = require("../../common/validation-user-data");
const User = require("../../../models/user");
const reqInDbUser = require('../../common/request-in-db')

router.get("/admin/user-is-admin/1.0", (req, res) => {
  console.log("/admin/user-is-admin/1.0 cookies: ", req.cookies);
  resSec(req, res, (req, res) => {
    const validationResult = validation.oneString.validateCookie.result({
      id: req.cookies.id,
      role:req.cookies.role
    });
    console.log(validationResult)
    if (validationResult.message) {
      return res.json({
        success: false,
        code: 404,
        message: "Unauthorized. Cookie not found",
      });
    } else {
      User.userIsAdmin(validationResult.data.id, (error, docs) => {
        if (error) throw error;
        else if (docs[0]) {
          return res.json({
            success: true,
            code: 200,
            message: "",
            data: {
              isAdmin: true,
            },
          });
        } else {
          return res.json({
            success: true,
            code: 401,
            message: "You are not admin",
            data: {
              isAdmin: false,
            },
          });
        }
      });
    }
  });
});

router.post("/admin/student/add-student/1.0", (req, res) => {
  console.log(req.body);
  resSec(req, res, (req, res) => {
    res.json("123");
  });
});

router.get('/admin/student/find/by-code/1.0',(req,res)=>{
  console.log(req.query)
  resSec(req, res, (req, res) => {
    const validationResult = validation.login.result(req.query.code);
    if (validationResult.message) {
      return res.json({ 
        success: false,
        code: 406,
        message: JSON.stringify(validationResult.message),
      });
    } else if (validationResult.data.code.length === 8) {
      reqInDbUser({
        model:'user',
        case:"getUserByCode",
        req,
        res,
        data:{code:validationResult.data.code},
    })
    } else {
      return res.json({ 
        success: false,
        code: 406,
        message: "Code length error",
      });
    }
  });
})

router.post('/admin/add-teacher/1.0',(req,res)=>{
  console.log(req.body)
  resSec(req,res,(req,res)=>{
    res.json("ok")
  })
})

router.post("/admin/add-student/1.0", (req, res) => {
  console.log("/admin/add-student/1.0");
  console.log(req.body);
  resSec(req, res, (req, res) => {
    const validationResult = validation.admin.validateAddStudentData.result(
      req.body
    );
    if (validationResult.message) {
      return res.json({
        success: false,
        code: 404,
        message: validationResult.message,
      });
    } else {
      let userData = new User.userSchema({
        ...validationResult.data,
        passportData: {
          ukr: {
            name: validationResult.data.ukrName,
            surname: validationResult.data.ukrSurname,
            middleName: validationResult.data.ukrMiddleName,
          },
          eng: {
            name: validationResult.data.engName,
            surname: validationResult.data.engSurname,
            middleName: validationResult.data.engMiddleName,
          },
        },
      });
      User.addUser(userData, (error, data) => {
        if (error) throw error;
        else if (data) {
          console.log("user created");
          res.json({
            success: true,
            code: 200,
            message: "Created",
          });
        } else {
          res.json({
            success: false,
            code: 500,
            message: "Невідома помилка серверу. Будь ласка спробуйте пізніше",
          });
        }
      });
    }
  });
});

module.exports = router;
