let initialState = {
  subjectsData: {
    subjectsArray: [
      {
        subjectName: "Безпека життєдіяльності",
        subjectCode: 2057,
      },
      {
        subjectName: "Домедична підготовка",
        subjectCode: 2070,
      },
      {
        subjectName: "Іноземна мова. Іноземна мова (за професійним спрямуванням)",
        subjectCode: 2063,
      },
    ],
    isGet: true,
  },
  isLoading: false,
};

const reducerAccount = (state = initialState, action) => {
  switch (action.type) {
    case "SET-SUBJECTS":
      if (action.subjects.success) {
        return { ...state, subjectsData: { ...action.subjectsData }, };
      } else {
        return { ...state };
      }
      case "TOGGLE-IS-LOADING":
      return { ...state, isLoading: action.isLoading };
    default:
      return { ...state };
  }
};

export const toggleIsLoading = (isLoading) => ({
    type: "TOGGLE-IS-LOADING",
    isLoading,
  });
export const setSubjects = (subjects) => ({ type: "SET-SUBJECTS", subjects });
export default reducerAccount;
