import { connect } from 'react-redux';
import { regist, getProfile, login } from '../../redux/action'

const withConnect = Component => {
  const stateToProps = state => ({
    register : state.user.register,
    loginResult : state.user.login,
  });

  const dispatchToProps = dispatch => ({
    regist : user => dispatch(regist(user)),
    login : user => dispatch(login(user)),
    getProfile : () => dispatch(getProfile()),
  });

  return connect(stateToProps, dispatchToProps)(Component);
}

export default withConnect;