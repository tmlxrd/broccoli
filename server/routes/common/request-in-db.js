const User = require("../../models/user");
const Teacher = require("../../models/teacher");
const resCookie = require("./res-cookie");
const reqInDbUser = (data) => {
  if (data.case === "getUserByCode") {
    User.getUserByCode(data.data.code, (error, docs) => {
      if (error) throw error;
      if (!docs[0]) {
        resCookie(data.res, null);
        return data.res.json({
          success: false,
          code: 404,
          message: "User not found",
        });
      } else {
        resCookie(data.res, { id: docs[0]._id, role: docs[0].role });
        data.res.json({
          success: true,
          code: 200,
          message: "",
          data: {
            role: docs[0].role,
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
  } else if (data.case === "getUserById") {
    console.log('---data.data.validationResult.data.id ---',data.data.validationResult.data.id)
    User.getUserById(data.data.validationResult.data.id/*"5fe069be23cd7b184c946058"*/, (error, docs) => {
      console.log("error: ",error," docs: ",docs)
      if (error) throw error;
      else if (!docs) {
        resCookie(data.res, null);
        return data.res.json({
          success: false,
          code: 404,
          message: "Unauthorized. User changed cookie",
        });
      } else {
        console.log('----User.getUserById ---- success',docs._id)
        resCookie(data.res, { id: docs._id, role: docs.role });
        data.res.json({
          success: true,
          code: 200,
          message: "",
          data: {
            role: docs.role,
            daybookNumber: docs.daybookNumber,
            image: docs.image,
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
};

const reqInDbTeacher = (data) => {
  switch (data.case) {
    case "getTeacherById":
      //data.data must be a string - dnkjdj3dfb34f4
      Teacher.getTeacherById(
        data.data.validationResult.data.id,
        (error, docs) => {
          if (error) throw error;
          if (!docs) {
            resCookie(data.res, null);
            return data.res.json({
              success: false,
              code: 404,
              message: "Teacher not found",
            });
          } else {
            resCookie(data.res, { id: docs._id, role: docs.role });
            data.res.json({
              success: true,
              code: 200,
              message: "",
              data: {
                role: docs.role,
                name: docs.name,
                surname: docs.surname,
                middleName: docs.middleName,
                image: docs.image,
                bio: docs.bio,
              },
            });
          }
        }
      );
      break;
    case "getTeacherByCode":
      Teacher.getTeacherByCode(data.data.code, (error, docs) => {
        if (error) throw error;
        if (!docs[0]) {
          resCookie(data.res, null);
          return data.res.json({
            success: false,
            code: 404,
            message: "Teacher not found",
          });
        } else {
          resCookie(data.res, { id: docs[0]._id, role: docs[0].role });
          data.res.json({
            success: true,
            code: 200,
            message: "",
            data: {
              role: docs[0].role,
              name: docs[0].name,
              surname: docs[0].surname,
              middleName: docs[0].middleName,
              image: docs[0].image,
              bio: docs[0].bio,
            },
          });
        }
      });
    default:
      break;
  }
};

/*
    data={
        model:'user',
        case:"getUserByCode",
        req,
        res,
        data:{username:'123',test:true},
    }
*/

const reqInDb = (data) => {
  console.log('case ---- ', data.case,' model --- ', data.model)
  switch (data.model) {
    case "user":
      reqInDbUser(data);
      break;
    case "student":
      reqInDbUser(data);
      break;
    case "teacher":
      reqInDbTeacher(data);
    default:
      console.log("data.model --------- ", data.model);
      break;
  }
};

module.exports = reqInDb;
