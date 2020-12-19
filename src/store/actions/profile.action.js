export const CHANGE_PROFILE_NAME = "CHANGE_PROFILE_NAME";

export const changeProfileName = val => async dispatch => {
  dispatch({
    type: CHANGE_PROFILE_NAME,
    payload: val
  });
};
