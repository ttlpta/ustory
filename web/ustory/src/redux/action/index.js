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
      url : 'user/auth/detail',
      headers: {
        'Authorization' : token
      }
    }
  }

  return dispatch => dispatch({ type : types.PROFILE_USER, payload });
}

export const updateProfile = data => {
  const token = localStorage.getItem('ustory_token');
  const payload = {
    request : {
      url : 'user/auth/detail',
      data,
      method: 'PUT',
      headers: {
        'Authorization' : token,
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

export const loginGg = user => {
  const payload = {
    request : {
      url: 'user/logingg',
      data: user,
      method: 'PUT'
    }
  }

  return dispatch => dispatch({ type: types.LOGINGG_USER, payload });
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

export const logout = () => {
  const token = localStorage.getItem('ustory_token');
  const payload = {
    request : {
      url : 'user/auth/logout',
      method: 'PUT',
      headers: {
        'Authorization' : token
      }
    }
  }

  return dispatch => dispatch({ type: types.LOGOUT_USER, payload });
}