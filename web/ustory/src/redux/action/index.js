import * as types from '../type';

export const regist = user => {
  const payload = {
    request : {
      url : 'user/regist',
      method: 'POST',
      data: user
    }
  };
  
  return dispatch => dispatch({ type : types.REGIST_USER, payload });
}