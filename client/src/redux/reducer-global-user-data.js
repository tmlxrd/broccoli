let initialState = {
  device: "",
  isLoading: false,
};

const reducerGlobalData = (state = initialState, action) => {
  switch (action.type) {
    case "SET-USER-DEVICE":
      return { ...state, device: action.device };
    case "TOGGLE-IS-LOADING":
      return { ...state, isLoading: action.isLoading };
    default:
      return { ...state };
  }
};

export const setGlobalDevice = (device) => ({
  type: "SET-USER-DEVICE",
  device,
});
export const setUserData = (user) => ({ type: "SET-USER-DATA", user });
export const toggleIsLoading = (isLoading) => ({
  type: "TOGGLE-IS-LOADING",
  isLoading,
});
export default reducerGlobalData;
