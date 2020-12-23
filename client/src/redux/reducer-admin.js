import {
  SET_NEW_STUDENT,
  TOGGLE_IS_ADMIN,
  TOGGLE_IS_LOADING,
  SET_NEW_STUDENT_FIND_CODE,
  SET_NEW_TEACHER,
} from "./types/admin";

const initialState = {
  isLoading: false,
  isAdmin: false,
  student: {
    add: {
      newStudentData: {
        image: "https://image.jpg",
        code: "81413093",
        daybookNumber: "1234",
        // nickname: "",
        engMiddleName: "VOLODYMYROVYCH",
        engName: "VLADYSLAV",
        engSurname: "TUPYCHKA",
        ukrMiddleName: "Володимирович",
        ukrName: "Владислав",
        ukrSurname: "Тупичка",
        profession: "П",
        registerNumber: "1173",
        entry: "01.09.2019",
      },
    },
    find: {
      byCode: {
        code: "12345678",
      },
      byUkr: {},
    },
  },
  teacher: {
    add: {
      newTeacherData: {
        name: "Любов",
        surname: "Турчанська",
        middleName: "Михайлівна",
        image:
          "https://dn.khnu.km.ua/kpk/k_img.aspx?M=k2156&T=autors&I=image003&R=jpg",
        bio:
          "Викладач Коломийського політехнічного коледжу Національного університету «Львівська політехніка»",
        code: 1234567,
      },
    },
    find: {},
  },
};

const reducerAdmin = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_ADMIN:
      if (action.data.success && action.data.data.isAdmin) {
        return { ...state, isAdmin: action.data.data.isAdmin };
      } else {
        return { ...state };
      }
    case SET_NEW_STUDENT:
      if (action.newStudentData === "Created") {
        return {
          ...state,
          student: {
            ...state.student,
            add: { ...state.student.newStudentData, newStudentData: {} },
          },
        };
      }
      return {
        ...state,
        student: {
          ...state.student,
          add: {
            ...state.student.add,
            newStudentData: {
              ...state.student.add.newStudentData,
              ...action.newStudentData,
            },
          },
        },
      };
    case TOGGLE_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_NEW_STUDENT_FIND_CODE:
      return {
        ...state,
        student: {
          ...state.student,
          find: {
            ...state.student.find,
            byCode: { ...state.student.find.byCode, code: action.newCode },
          },
        },
      };
    case SET_NEW_TEACHER:
      if (action.newTeacherData === "Created") {
        return {
          ...state,
          teacher: {
            ...state.teacher,
            add: {
              ...state.teacher.add,
              newTeacherData: {},
            },
          },
        };
      }
      return {
        ...state,
        teacher: {
          ...state.teacher,
          add: {
            ...state.teacher.add,
            newTeacherData: {
              ...state.teacher.add.newTeacherData,
              ...action.newTeacherData,
            },
          },
        },
      };
    default:
      return { ...state };
  }
};

export const toggleIsAdmin = (data) => ({ type: TOGGLE_IS_ADMIN, data });
export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});
export const setNewStudent = (newStudentData) => ({
  type: SET_NEW_STUDENT,
  newStudentData,
});
export const setNewStudentFindCode = (newCode) => ({
  type: SET_NEW_STUDENT_FIND_CODE,
  newCode,
});

export const setNewTeacher = (newTeacherData) => ({
  type: SET_NEW_TEACHER,
  newTeacherData,
});
export default reducerAdmin;
