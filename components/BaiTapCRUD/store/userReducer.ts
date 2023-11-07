interface User {
  name: string;
  email: string;
}

const initState = {
  inputName: '',
  inputEmail: '',
  listUser: <User[]>[],
  isUpdate: false,
  idxUpdate: null,
};

function userReducer(state = initState, action: any) {
  switch (action.type) {
    case 'INPUT_NAME_ACTION':
      return {
        ...state,
        inputName: action.payload,
      };
    case 'INPUT_EMAIL_ACTION':
      return {
        ...state,
        inputEmail: action.payload,
      };
    case 'SAVE_LIST_USER':
      return {
        ...state,
        listUser: [
          ...state.listUser,
          {name: state.inputName, email: state.inputEmail},
        ],
      };
    case 'DELETE_USER':
      const newArr = state.listUser;
      newArr.splice(action.payload, 1);
      return {
        ...state,
        listUser: [...newArr],
      };
    case 'SET_IS_UPDATE':
      return {
        ...state,
        isUpdate: !state.isUpdate,
      };
    case 'GET_INFO':
      return {
        ...state,
        idxUpdate: action.payload,
      };
    case 'UPDATE_USER':
      state.listUser[action.payload].name = state.inputName;
      state.listUser[action.payload].email = state.inputEmail;
      return {
        ...state,
        listUser: [...state.listUser],
      };
    default:
      return state;
  }
}

export default userReducer;
