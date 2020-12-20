let initialState = {
  userData: {
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
    case "SET-USER-DATA":
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
      case "TOGGLE-IS-LOADING":
      return { ...state, isLoading: action.isLoading };
    default:
      return { ...state };
  }
};

export const setUser = (user) => ({ type: "SET-USER-DATA", user });
export const toggleIsLoading = (isLoading) => ({
  type: "TOGGLE-IS-LOADING",
  isLoading,
});
export default reducerAuth;
