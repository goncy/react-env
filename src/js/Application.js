import React from 'react';
import {} from '../scss/application.scss'

export default class Application extends React.Component {
  render(){
    return <h1>Hello {this.props.name}</h1>;
  }
}