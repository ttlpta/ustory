import { connect } from 'react-redux';

const withConnect = Component => {
  const stateToProps = state => ({
    profile : state.user.profile,
  });

  const dispatchToProps = dispatch => ({
  });

  return connect(stateToProps)(Component);
}

export default withConnect;