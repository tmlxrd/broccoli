const express = require("express");
const router = express.Router();
const resSec = require("../../common/response-security");
const validation = require("../../common/validation-user-data");
const reqInDb = require("../../common/request-in-db");
const resCookie = require('../../common/res-cookie')
router.get("/user/login-with-cookie/2.0", (req, res) => {
  console.log('/user/login-with-cookie/2.0 cookie',req.cookies)
  resSec(req, res, (req, res) => {
    const validationResult = validation.oneString.validateCookie.result(
      req.cookies
    );
    if (validationResult.message) {
      resCookie(res,null)
      return res.json({
        success: false,
        code: 406,
        message: JSON.stringify(validationResult.message),
      });
    } else {
      if (req.cookies.role === "user"||req.cookies.role === "student") {
        console.log("user -> student");
        reqInDb({
            model:'student',
            req,
            res,
            case:"getUserById",
            data:{validationResult},
        })
      } else if (req.cookies.role === "teacher") {
        console.log("teacher");
        reqInDb({
          model: "teacher",
          case: "getTeacherById",
          req,
          res,
          data: { validationResult },
        });
      } else if (req.cookies.role === "admin") {
        console.log("admin");
        reqInDb({
          model: "user",
          case: "getUserById",
          req,
          res,
          data: { validationResult },
        });
      } else {
        console.log("error");
      }
    }
  });
});

router.get("/user/login/2.0", (req, res) => {
  console.log('/user/login/2.0 query: ',req.query)
  resSec(req, res, (req, res) => {
    const validationResult = validation.login.result(req.query.code);
    if (validationResult.message) {
      return res.json({
        success: false,
        code: 406,
        message: JSON.stringify(validationResult.message),
      });
    } else if (validationResult.data.code.length === 8) {
      console.log("student");
      reqInDb({
        model: "user",
        case: "getUserByCode",
        req,
        res,
        data: { code: Number(validationResult.data.code) },
      });
    } else {
      console.log("tea");
      reqInDb({
        model: "teacher",
        case: "getTeacherByCode",
        req,
        res,
        data: { code: Number(validationResult.data.code) },
      });
    }
  });
});

module.exports = router;
