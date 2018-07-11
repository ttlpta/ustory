import React, { Component } from "react";

import { uploadImage } from '../../utils';
import withConnect from "./withConnect";

class Profile extends Component
{
  constructor(props){
    super(props);
    this.state = { 
      avatar : '',
      nickname: '', 
      firstname: '', 
      lastname: '', 
      password: '', 
      phone: '', 
      city: '', 
      cmnd: '', 
      birthday: '', 
      address : ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.profile);
  }

  readUrl = e => {
    const input = e.target;
    if (input.files && input.files[0]) {
      let imgFormData = new FormData();
      imgFormData.append('avatar', input.files[0], 'profile.jpg');
      this.setState({ avatar : imgFormData });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const imageUrl = await uploadImage(this.state.avatar);
    if(imageUrl) {
      const data = { 
        avatar : imageUrl,
        nickname: this.state.nickname, 
        firstname: this.state.firstname, 
        lastname: this.state.lastname, 
        password: this.state.password, 
        phone: this.state.phone, 
        city: this.state.city, 
        cmnd: this.state.cmnd, 
        birthday: this.state.birthday, 
        address: this.state.address, 
      };

      this.props.updateProfile(data);
    }
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  render(){
    return (
      <div>
        <form method="post" onSubmit={ this.handleSubmit }>
          <label htmlFor="avatar">Avatar</label>
          <img src={ this.state.avatar }/>
          <input type="file" name="avatar" onChange={ this.readUrl }/><br />
          <label htmlFor="nickname">Nickname</label>
          <input type="text" name="nickname" value={ this.state.nickname } onChange={ this.onChangeInput }/><br />
          <label htmlFor="firstname">Firstname</label>
          <input type="text" name="firstname" onChange={ this.onChangeInput }/><br />
          <label htmlFor="lastname">Lastname</label>
          <input type="text" name="lastname" onChange={ this.onChangeInput }/><br />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" onChange={ this.onChangeInput }/><br />
          <label htmlFor="repassword">Re-Password</label>
          <input type="text" name="repassword" onChange={ this.onChangeInput }/><br />
          <label htmlFor="phone">Điện thoại</label>
          <input type="text" name="phone" onChange={ this.onChangeInput }/><br />
          <label htmlFor="city">Thành phố</label>
          <input type="text" name="city" onChange={ this.onChangeInput }/><br />
          <label htmlFor="cmnd">CMND</label>
          <input type="text" name="cmnd" onChange={ this.onChangeInput }/><br />
          <label htmlFor="birthday">Ngày sinh</label>
          <input type="text" name="birthday" onChange={ this.onChangeInput }/><br />
          <label htmlFor="address">Địa chỉ</label>
          <input type="text" name="address" onChange={ this.onChangeInput }/><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };  
}

export default withConnect(Profile);
