const initState = {
  showCalculate: ['0'],
  showResult: '',
};

function calculatorReducer(state = initState, action: any) {
  switch (action.type) {
    case 'NUMBER_CLICK_ACTION':
      return {
        ...state,
        showCalculate: [...state.showCalculate, action.payload],
      };
    default:
      return state;
  }
}

export default calculatorReducer;
