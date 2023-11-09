const initState = {
  stringNumberA: '',
  stringNumberB: '',
  stringOperator: '',
  isDoneNumberA: false,
  stringCalculate: `0`,
};

function calculatorReducer(state = initState, action: any) {
  switch (action.type) {
    case 'NUMBER_CLICK_ACTION':
      if (!state.isDoneNumberA) {
        if (state.stringNumberA.length < 15) {
          return {
            ...state,
            stringNumberA: `${state.stringNumberA}${action.payload}`,
          };
        }
        return {
          ...state,
        };
      } else {
        if (state.stringNumberB.length < 15) {
          return {
            ...state,
            stringNumberB: `${state.stringNumberB}${action.payload}`,
          };
        }
        return {
          ...state,
        };
      }

    case 'OPERATOR_CLICK_ACTION':
      return {
        ...state,
        isDoneNumberA: true,
        stringOperator: action.payload,
      };

    case 'EQUAL_CLICK_ACTION':
      let calculate = +state.stringNumberA;

      switch (state.stringOperator) {
        case '+':
          calculate += +state.stringNumberB;
          break;
        case '-':
          calculate -= +state.stringNumberB;
          break;
        case '*':
          calculate *= +state.stringNumberB;
          break;
        case '/':
          calculate /= +state.stringNumberB;
          break;
      }
      return {
        ...state,
        stringCalculate: `${calculate}`,
      };

    case 'CLEAR_CLICK_ACTION':
      return {
        ...state,
        stringNumberA: '',
        stringNumberB: '',
        stringOperator: '',
        isDoneNumberA: false,
        stringCalculate: `0`,
      };

    default:
      return state;
  }
}

export default calculatorReducer;
