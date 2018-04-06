import { connect } from 'react-redux';
import { loginFb, getProfile } from '../../redux/action';

const withConnect = Component => {
  const stateToProps = state => ({
    loginFbResult : state.user.loginfb
  });

  const dispatchToProps = dispatch => ({
    loginFb : user => dispatch(loginFb(user)),
    getProfile : id => dispatch(getProfile(id)),
  });

  return connect(stateToProps, dispatchToProps)(Component);
}

export default withConnect;