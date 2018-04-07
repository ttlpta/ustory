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
  console.log('--2--', token);  
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

export const loginFb = user => {
  const payload = {
    request : {
      url: 'user/loginFb',
      data: user,
      method: 'PUT'
    }
  }

  return dispatch => dispatch({ type: types.LOGINFB_USER, payload });
}