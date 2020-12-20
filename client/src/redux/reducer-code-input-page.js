let initialState = {
    code: "",
    isLoading: false,
  };
  
  const reducerCodeData = (state = initialState, action) => {
    switch (action.type) {
      case "SET-USER-CODE":
        return { ...state, code: action.code };
      case "TOGGLE-IS-LOADING":
        return { ...state, isLoading: action.isLoading };
      default:
        return { ...state };
    }
  };
  
  export const setUserCode = (code) => ({
    type: "SET-USER-CODE",
    code,
  });
  export const toggleIsLoading = (isLoading) => ({
    type: "TOGGLE-IS-LOADING",
    isLoading,
  });
  export default reducerCodeData;
  