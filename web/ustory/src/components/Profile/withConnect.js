import { connect } from 'react-redux';
import { updateProfile } from '../../redux/action';

const withConnect = Component => {
  const stateToProps = state => ({
    profile : state.user.profile
  });

  const dispatchToProps = dispatch => ({
    updateProfile : data => dispatch(updateProfile(data)),
  });

  return connect(stateToProps, dispatchToProps)(Component);
}

export default withConnect;
