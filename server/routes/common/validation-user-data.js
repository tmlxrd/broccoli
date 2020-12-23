const Joi = require("@hapi/joi")
const validation = {
  // registration:{
  // _validateData: Joi.object({
  //   nickname:Joi.string()
  //   .min(3)
  //   .max(15)
  //   .required()
  //   .pattern(new RegExp("^[a-z0-9]{3,15}$"))
  //   .messages({
  //     "string.min": "Мінімальна довжина ніку 3 символи",
  //     "string.max": "Максимальна довжина ніку 15 символів",
  //     "string.pattern": "Лише: [a-z0-9]",
  //     "any.required": "Невідома проблема з ніком",
  //   }),
  //   username: Joi.string()
  //       .min(1)
  //       .max(25)
  //       .messages({
  //         "string.min": "Мінімальна довжина  3 символи",
  //         "string.max": "Максимальна довжина ніку 15 символів",
  //         "any.required": "Невідома проблема з прізвиськом",
  //       }),
  //     email: Joi.string()
  //       .email({
  //         minDomainSegments: 2,
  //         tlds: { allow: ["com", "net", "ru", "ua", "i.ua"] },
  //       })
  //       .required()
  //       .min(3)
  //       .max(30).messages({
  //         "string.min": "Мінімальна довжина пошти 8 символів",
  //         "string.max": "Максимальна довжина пошти 30 символів",
  //         "any.required": "Невідома проблема з поштою",
  //       }),
  //       password: Joi.string().min(8).max(30).required().messages({
  //         "string.min": "Мінімальна довжина паролю 8 символів",
  //         "string.max": "Максимальна довжина паролю 30 символів",
  //         "any.required": "Невідома проблема з паролем",
  //       }),
  //   }),
  // result:(data)=>{
  //   const validationResult = this._validateRegistrationData.validate(
  //     { nickname:data.nickname,username:data.username,email: data.email,password:data.password},
  //     { abortEarly: false }
  //   );
  //   if(validationResult.error){
  //     return(null,{success:false, message:validationResult.error.details[0].message});
  //   } else {
  //      return(null,{success:true,data:validationResult.value});
  //   }
  // }
  // },
  login:{
    _validateData:Joi.object({
      code:Joi.string()
      .min(7)
      .max(8)
      .required()
      .pattern(new RegExp("^[0-9]{7,8}$"))
      .messages({
        "string.min": "Length code error",
        "string.max": "Length code error",
        "string.pattern": "Only: [0-9]",
        "any.required": "Unknown code error",
      }),
      }),
      result:(code)=>{
        const validationResult = validation.login._validateData.validate(
          {code:code},
          { abortEarly: false }
        );
        if(validationResult.error){
          return(null,{success:false, message:validationResult.error.details[0].message});
        } else {
           return(null,{success:true,data:validationResult.value});
        }
      }
  
  },
  oneString:{
    validateTeacherCode:{
      _validateData: Joi.object({
        code:Joi.string()
        .min(3)
        .max(15)
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,15}$"))
        .messages({
          "string.min": "Code min length error",
          "string.max": "Code max length error",
          "string.pattern": "Code pattern error",
          "any.required": "Code unknown error",
        }),
        }),
      result:(code)=>{
        const validationResult = validation.oneString.validateTeacherCode._validateData.validate(
          { code:code},
          { abortEarly: false }
        );
        if(validationResult.error){
          return(null,{success:false, message:validationResult.error.details[0].message});
        } else {
           return(null,{success:true,data:validationResult.value});
        }
      }
    },
    validateCookie:{
      _validateData: Joi.object({
        id:Joi.string()
        .min(24)
        .max(24)
        .required()
        .pattern(new RegExp("^[a-z0-9]{24,24}$"))
        .messages({
          "string.min": "Cookie min length error",
          "string.max": "Cookie max length error",
          "string.pattern": "Cookie pattern error",
          "any.required": "Cookie unknown error",
        }),
        role:Joi.string()
        .min(3)
        .max(7)
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,7}$"))
        .messages({
          "string.min": "Role min length error",
          "string.max": "Role max length error",
          "string.pattern": "Role pattern error",
          "any.required": "Role unknown error",
        }),
        }),
        result:(data)=>{
          const validationResult = validation.oneString.validateCookie._validateData.validate(
            { id:data.id,role:data.role},
            { abortEarly: false }
          );
          if(validationResult.error){
            return(null,{success:false, message:validationResult.error.details[0].message});
          } else {
             return(null,{success:true,data:validationResult.value});
          }
        }
    }
  },
  admin:{
  validateAddStudentData:{
    _validateData:Joi.object({
      image:Joi.string()
      .min(5)
      .max(80)
      .required()
      // .pattern(new RegExp("^[0-9a-zA-Z]{5,80}$"))
      .messages({
        "string.min": "Посилання на зображення занадто коротке",
        "string.max": "Посилання на зображення занадто довге",
        "string.pattern": "Введені некоректні символи в полі 'Зображення'",
        "any.required": "Помилка з зображенням",
      }),
      code:Joi.string()
      .min(8)
      .max(8)
      .required()
      .pattern(new RegExp("^[0-9]{8,8}$"))
      .messages({
        "string.min": "Код доступу студента занадто короткий",
        "string.max": "Код доступу студента занадто довгий",
        "string.pattern": "Введені некоректні символи в полі 'Код доступу користувача'",
        "any.required": "Помилка з кодом доступу користувача",
      }),
      
      daybookNumber:Joi.string()
      .min(1)
      .max(10)
      .required()
      .pattern(new RegExp("^[0-9]{1,10}$"))
      .messages({
        "string.min": "Порядковий номер студента згiдно списку занадто короткий",
        "string.max": "Порядковий номер студента згiдно списку занадто довгий",
        "string.pattern": "Введені некоректні символи в полі 'Порядковий номер студента згiдно списку'",
        "any.required": "Помилка з порядковим номером студента згiдно списку",
      }),

      engMiddleName:Joi.string()
      .min(1)
      .max(40)
      .required()
      .pattern(new RegExp("^[A-z]{1,40}$"))
      .messages({
        "string.min": "Ім'я по батькові студента англійською занадто коротке",
        "string.max": "Ім'я по батькові студента англійською занадто довге",
        "string.pattern": "Введені некоректні символи в полі 'Ім'я по батькові студента англійською'",
        "any.required": "Помилка з ім'ям по батькові студента англійською",
      }),

      engName:Joi.string()
      .min(1)
      .max(40)
      .required()
      .pattern(new RegExp("^[A-z]{1,40}$"))
      .messages({
        "string.min": "Ім'я по студента англійською занадто коротке",
        "string.max": "Ім'я студента англійською занадто довге",
        "string.pattern": "Введені некоректні символи в полі 'Ім'я студента англійською'",
        "any.required": "Помилка з ім'ям студента англійською",
      }),

      engSurname:Joi.string()
      .min(1)
      .max(40)
      .required()
      .pattern(new RegExp("^[A-z]{1,40}$"))
      .messages({
        "string.min": "Прізвище студента англійською занадто коротке",
        "string.max": "Прізвище англійською занадто довге",
        "string.pattern": "Введені некоректні символи в полі 'Прізвище студента англійською'",
        "any.required": "Помилка з прізвищем англійською",
      }),

      ukrMiddleName:Joi.string()
      .min(1)
      .max(40)
      .required()
      .pattern(new RegExp("^[а-яА-Я]{1,40}$"))
      .messages({
        "string.min": "Ім'я по батькові студента українською занадто коротке",
        "string.max": "Ім'я по батькові українською занадто довге",
        "string.pattern": "Введені некоректні символи в полі 'Ім'я по батькові студента українською'",
        "any.required": "Помилка з ім'ям по батькові українською",
      }),

      ukrName:Joi.string()
      .min(1)
      .max(40)
      .required()
      .pattern(new RegExp("^[а-яА-Я]{1,40}$"))
      .messages({
        "string.min": "Ім'я студента українською занадто коротке",
        "string.max": "Ім'я українською занадто довге",
        "string.pattern": "Введені некоректні символи в полі 'Ім'я студента українською'",
        "any.required": "Помилка з ім'ям українською",
      }),

      ukrSurname:Joi.string()
      .min(1)
      .max(40)
      .required()
      .pattern(new RegExp("^[а-яА-Я]{1,40}$"))
      .messages({
        "string.min": "Прізвище студента українською занадто коротке",
        "string.max": "Прізвище українською занадто довге",
        "string.pattern": "Введені некоректні символи в полі 'Прізвище студента українською'",
        "any.required": "Помилка з прізвищем українською",
      }),

      profession:Joi.string()
      .min(1)
      .max(5)
      .required()
      .pattern(new RegExp("^[a-zA-zа-яА-Я]{1,5}$"))
      .messages({
        "string.min": "Навчальний план занадто короткий",
        "string.max": "Навчальний план занадто довгий",
        "string.pattern": "Введені некоректні символи в полі 'Навчальний план'",
        "any.required": "Помилка з навчальним планом",
      }),

      registerNumber:Joi.string()
      .min(1)
      .max(5)
      .required()
      .pattern(new RegExp("^[0-9]{1,5}$"))
      .messages({
        "string.min": "Номер залікової книжки занадто короткий",
        "string.max": "Номер залікової книжки занадто довгий",
        "string.pattern": "Введені некоректні символи в полі 'Номер залікової книжки'",
        "any.required": "Помилка з номером залікової книжки",
      }),
      
      entry: Joi.string()
      .required()


      }),
      result:(data)=>{
        const validationResult = validation.admin.validateAddStudentData._validateData.validate(
          data,
          { abortEarly: false }
        );
        if(validationResult.error){
          return(null,{success:false, message:validationResult.error.details[0].message});
        } else {
           return(null,{success:true,data:validationResult.value});
        }
      }
  }}
}
module.exports = validation