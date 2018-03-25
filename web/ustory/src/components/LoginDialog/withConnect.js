import { connect } from 'react-redux';
import { regist, getProfile } from '../../redux/action'

const withConnect = Component => {
  const stateToProps = state => ({
    register : state.user.register,
  });

  const dispatchToProps = dispatch => ({
    regist : user => dispatch(regist(user)),
    getProfile : id => dispatch(getProfile(id)),
  });

  return connect(stateToProps, dispatchToProps)(Component);
}

export default withConnect;