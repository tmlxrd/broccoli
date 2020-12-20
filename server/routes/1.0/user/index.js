const express = require("express");
const router = express.Router();
const resSec = require("../../common/response-security");
const validation = require("../../common/validation-user-data");
const User = require("../../../models/user");

router.get("/user/login/1.0", (req, res) => {
  console.log("/user/login/1.0 cookies: ",req.cookies)
  resSec(req, res, (req, res) => {
    const validationResult = validation.login.result(req.query.code);
    if (validationResult.message) {
      return res.json({
        success: false,
        code: 406,
        message: JSON.stringify(validationResult.message),
      });
    } else {
      User.getUserByCode(validationResult.data.code, (error, docs) => {
        if (error) throw error;
        if (!docs[0]) {
          res.cookie("id", "");
          return res.json({
            success: false,
            code: 404,
            message: "User not found",
          });
        } else {
          res.cookie("id", docs[0]._id);
          res.json({
            success: true,
            code: 200,
            message: "",
            data: {
              daybookNumber: docs[0].daybookNumber,
              image: docs[0].image,
              registerNumber: docs[0].registerNumber,
              profession: docs[0].profession,
              passportData: docs[0].passportData,
              entry: docs[0].entry,
              course: docs[0].course,
              formOfEducation: docs[0].formOfEducation,
            },
          });
        }
      });
    }
  });
});

router.get("/user/login-with-cookie/1.0", (req, res) => {
  console.log("/user/login-with-cookie/1.0 cookies: ",req.cookies)
  resSec(req, res, (req, res) => {
    const validationResult = validation.oneString.validateCookie.result({
      id: req.cookies.id,
    });
    if (validationResult.message) {
      return res.json({
        success: false,
        code: 404,
        message: "Unauthorized. Cookie not found",
      });
    } else {
      User.getUserById(validationResult.data.id, (error, docs) => {
        if (error) throw error;
        else if (!docs) {
          res.cookie("id", "");
          return res.json({
            success: false,
            code: 404,
            message: "Unauthorized. User changed cookie",
          });
        } else {
          res.cookie("id", docs._id);
          return res.json({
            success: true,
            code: 200,
            message: "",
            data: {
              nickname: docs.nickname,
              image: docs.image,
              daybookNumber: docs.daybookNumber,
              registerNumber: docs.registerNumber,
              profession: docs.profession,
              passportData: docs.passportData,
              entry: docs.entry,
              course: docs.course,
              formOfEducation: docs.formOfEducation,
            },
          });
        }
      });
    }
  });
});

router.get("/user/logout/1.0",(req,res)=>{
  console.log("/user/logout/1.0 cookies: ",req.cookies)
  resSec(req, res, (req, res) => {
    const validationResult = validation.oneString.validateCookie.result({
      id: req.cookies.id,
    });
    if (validationResult.message) {
      return res.json({
        success:false,
        code: 404,
        message: "Unauthorized. Cookie not found",
      });
    } else {
      res.cookie("id","")
      return res.json({
        success:true,
        code: 200,
        message: "Logout success",
      });
    }})
})

module.exports = router;
