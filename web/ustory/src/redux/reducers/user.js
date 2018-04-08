import _ from 'lodash';

import * as type from "../type";

const defaultState = {
  profile : { isLoading: false, isLogin : false },
  register : { isLoading: false, success : false, message : '' },
  loginfb : { isLoading: false },
  logingg : { isLoading: false },
  login : { isLoading: false, success : false, message : '' },
  logout : { isLoading: false }
};

export default (state = defaultState , action) => {
  switch (action.type) {
    case type.REGISTER_USER + '_SUCCESS' : 
      state = {...state, 
        register : { ...state.register, isLoading: false, ...action.payload.data }}
      break;
    case type.PROFILE_USER + '_SUCCESS' : 
      state = {...state, 
        profile : { 
          ...state.profile, isLoading: false, isLogin: action.payload.data.success, ...action.payload.data.data
        }}
      break;
    case type.LOGINFB_USER + '_SUCCESS' : 
      state = {...state, 
        loginfb : { isLoading : false, ...action.payload.data },
      }
      break;
    case type.LOGINGG_USER + '_SUCCESS' : 
      state = {...state, 
        logingg : { isLoading : false, ...action.payload.data },
      }
      break;
    case type.LOGIN_USER + '_SUCCESS' : 
      state = {...state, 
        login : { isLoading : false, ...action.payload.data },
      }
      break;
    case type.LOGOUT_USER + '_SUCCESS' : 
      state = {...state, 
        logout : { isLoading : false, ...action.payload.data },
      }
      break;
    default:
      const actionType = _.toLower(action.type);
      if(_.endsWith(actionType, '_user_fail')) {
        state = {...state, [_.replace(actionType, '_user_fail', '')]: {isLoading: false, success: false}};
      }
      if(_.endsWith(actionType, '_user')) {
        state = {...state, [_.replace(actionType, '_user', '')]: {isLoading: true}};
      }

      break;
  }
  
  return state;
}