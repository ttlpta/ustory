import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getProfile } from '../../redux/action';

class BaseController extends Component
{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillMount() {
    const token = localStorage.getItem('ustory_token');
    if(token) {
      this.props.getProfile();
    }
  }

  render(){
    return null;
  }
}

const mapStateToProps = state => ({
  profile : state.user.profile
});

const mapDispatchToProps = dispatch => ({
  getProfile : () => dispatch(getProfile())
});
export default connect(mapStateToProps, mapDispatchToProps)(BaseController);
