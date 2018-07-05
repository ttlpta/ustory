import React, { Component } from "react";

export default class Profile extends Component
{
  constructor(props){
    super(props);
  }

  readUrl = e => {
    const input = e.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(input.files[0]);
      reader.onload = ev => {
        console.log(ev.target.result);
        this.setState({
          image: ev.target.result,
        })
      };
      
    }
  }

  handleSubmit = () => {
    let type = 'image/jpeg';
    let bin = atob(this.state.image.split(',')[1]);
    let buffer = new Uint8Array(bin.length);
    for(let i=0;i<bin.length;i++){
      buffer[i] = bin.charCodeAt(i);
    }
    let blob = new Blob([buffer.buffer], {type: type});
    let imgFormData = new FormData()
    imgFormData.append('file', blob, 'profile.jpg')
    const data = {
      avatar: imgFormData,
      email : this.state.rEmail,
      password : this.state.rPassword,
      nickname : this.state.rName
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="avatar">Avatar</label>
          <input type="file" name="avatar" onChange={ this.readUrl }/><br />
          <label htmlFor="nickname">Nickname</label>
          <input type="text" name="nickname" onChange={ this.onChangeInput }/><br />
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
