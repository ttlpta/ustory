import { connect } from 'react-redux';
import { loginFb } from '../../redux/action';

const withConnect = Component => {
  const stateToProps = state => ({
  });

  const dispatchToProps = dispatch => ({
    loginFb : user => dispatch(loginFb(user))
  });

  return connect(stateToProps, dispatchToProps)(Component);
}

export default withConnect;