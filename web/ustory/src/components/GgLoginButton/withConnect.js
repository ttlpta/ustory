import { connect } from 'react-redux';
import { loginGg, getProfile } from '../../redux/action';

const withConnect = Component => {
  const stateToProps = state => ({
    loginGgResult : state.user.logingg
  });

  const dispatchToProps = dispatch => ({
    loginGg : user => dispatch(loginGg(user)),
    getProfile : () => dispatch(getProfile()),
  });

  return connect(stateToProps, dispatchToProps)(Component);
}

export default withConnect;