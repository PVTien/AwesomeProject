export const numberClickAction = (payload: any) => {
  return {
    type: 'NUMBER_CLICK_ACTION',
    payload,
  };
};

export const operatorClickAction = (payload: any) => {
  return {
    type: 'OPERATOR_CLICK_ACTION',
    payload,
  };
};

export const equalClickAction = () => {
  return {
    type: 'EQUAL_CLICK_ACTION',
  };
};

export const clearClickAction = () => {
  return {
    type: 'CLEAR_CLICK_ACTION',
  };
};
