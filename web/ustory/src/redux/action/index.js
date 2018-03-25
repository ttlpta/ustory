import * as types from '../type';

export const regist = user => {
  const payload = {
    request : {
      url : 'user/regist',
      method: 'POST',
      data: user
    }
  };
  
  return dispatch => dispatch({ type : types.REGISTER_USER, payload });
}

export const getProfile = id => {
  const token = localStorage.getItem('ustory_token');
  const payload = {
    request : {
      url : 'user/detail',
      params : { id },
      headers: {
        'Authorization' : token
      }
    }
  }

  return dispatch => dispatch({ type : types.PROFILE_USER, payload });
}