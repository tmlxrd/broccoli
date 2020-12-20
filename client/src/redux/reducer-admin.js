import { TOGGLE_IS_ADMIN } from './types/admin'


const initialState = {
  isLoading: false,
  isAdmin: false,
  studentData: {
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
};

const reducerAdmin = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_ADMIN:
      if (action.data.success && action.data.data.isAdmin) {
        return { ...state, isAdmin: action.data.data.isAdmin };
      } else {
        return { ...state };
      }
    case "SET-NEW-STUDENT":
      return {
        ...state,
        studentData: { ...state.studentData, ...action.studentData },
      };
    case "ADMIN/TOGGLE_IS_LOADING":
      return { ...state, isLoading: action.isLoading };
    default:
      return { ...state };
  }
};

export const toggleIsAdmin = (data) => ({ type: TOGGLE_IS_ADMIN, data });
export const toggleIsLoading = (isLoading) => ({
  type: "ADMIN/TOGGLE_IS_LOADING",
  isLoading,
});
export const setNewStudent = (studentData) => ({
  type: "SET-NEW-STUDENT",
  studentData,
});

export default reducerAdmin;
