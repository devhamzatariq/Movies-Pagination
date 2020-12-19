export const CHANGE_NAME = "CHANGE_NAME";

export const changeName = value => async dispatch => {
  dispatch({
    type: CHANGE_NAME,
    payload: value
  });
};
