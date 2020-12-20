let initialState = {
    isLoading: false,
    isLogged:null
  };
  
    const reducerLogout= (state = initialState, action) => {
        switch (action.type) {
        case "TOGGLE-IS-LOADING":
            return { ...state, isLoading: action.isLoading };
        case "TOGGLE-IS-LOGGED":
            return {...state, isLogged:action.isLogged}
        default:
          return { ...state };
      }
    };
    
    export const toggleIsLogged = (isLogged)=>(
        {
            type: "TOGGLE-IS-LOGGED",
            isLogged,
          }
    )
    export const toggleIsLoading = (isLoading) => ({
        type: "TOGGLE-IS-LOADING",
        isLoading,
      });
    export default reducerLogout;
    