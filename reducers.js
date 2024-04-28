const initialState = {
  uniqueId: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_UNIQUE_ID':
      return {
        ...state,
        uniqueId: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
