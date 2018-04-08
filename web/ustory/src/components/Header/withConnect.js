import { connect } from 'react-redux';

import { logout } from '../../redux/action';
const withConnect = Component => {
  const stateToProps = state => ({
    profile : state.user.profile,
    logoutResult: state.user.logout
  });

  const dispatchToProps = dispatch => ({
    logout : () => dispatch(logout())
  });

  return connect(stateToProps, dispatchToProps)(Component);
}

export default withConnect;