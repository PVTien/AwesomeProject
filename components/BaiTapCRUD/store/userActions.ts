export const inputNameAction = (payload: any) => {
  return {
    type: 'INPUT_NAME_ACTION',
    payload,
  };
};

export const inputEmailAction = (payload: any) => {
  return {
    type: 'INPUT_EMAIL_ACTION',
    payload,
  };
};

export const saveListUserAction = () => {
  return {
    type: 'SAVE_LIST_USER',
  };
};

export const deleteUserAction = (payload: any) => {
  return {
    type: 'DELETE_USER',
    payload,
  };
};

export const setIsUpdateAction = () => {
  return {
    type: 'SET_IS_UPDATE',
  };
};

export const getInfoAction = (payload: any) => {
  return {
    type: 'GET_INFO',
    payload,
  };
};

export const updateUserAction = (payload: any) => {
  return {
    type: 'UPDATE_USER',
    payload,
  };
};
