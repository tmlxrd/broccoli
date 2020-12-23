import { SET_USER_DATA, TOGGLE_IS_LOADING } from "./types/auth";

let initialState = {
  userData: {
    role:null,
    daybookNumber: null,
    nickname: null,
    passportData: {
      eng: { middleName: null, name: null, surname: null },
      ukr: { middleName: null, name: null, surname: null },
    },
    profession: null,
    registerNumber: null,
  },
  isLoading: false,
  isLogged: false,
};

const reducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      if (action.user.success) {
        if (action.user.message === "Logout success") {
          return { ...state, isLogged: false };
        }
        return {
          ...state,
          userData: { ...action.user.data },
          isGet: true,
          isLogged: true,
        };
      } else {
        return { ...state, isLogged: false };
      }
    case TOGGLE_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return { ...state };
  }
};

export const setUserData = (user) => ({ type: SET_USER_DATA, user });
export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});
export default reducerAuth;
