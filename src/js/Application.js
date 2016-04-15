import React from 'react';
import {} from '../scss/application.scss'

export default class Application extends React.Component {
  render(){
    return <span>Hello {this.props.name}</span>;
  }
}