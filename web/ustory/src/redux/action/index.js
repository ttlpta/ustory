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

export const getProfile = () => {
  const token = localStorage.getItem('ustory_token');
  const payload = {
    request : {
      url : 'user/detail',
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

export const login = user => {
  const payload = {
    request : {
      url : 'user/login',
      data : user,
      method: 'POST'
    }
  }

  return dispatch => dispatch({ type: types.LOGIN_USER, payload });
}