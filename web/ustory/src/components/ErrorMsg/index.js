import React, { Component } from 'react';

export default class ErrorMsg extends Component 
{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="error-msg">{ this.props.msg }</div>
    );
  }
}