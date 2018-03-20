import { connect } from 'react-redux';
import { regist } from '../../redux/action'

const withConnect = Component => {
  const stateToProps = state => ({

  });

  const dispatchToProps = dispatch => ({
    regist : user => dispatch(regist(user))
  });

  return connect(stateToProps, dispatchToProps)(Component);
}

export default withConnect;