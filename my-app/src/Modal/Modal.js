import React, { Component } from 'react';
import s from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    console.log('modal component did mount');
  }
  componentWillUnmount() {
    console.log('Component did unmount');
  }

  render() {
    return (
      <div className={s.backdrop}>
        <div className={s.content}>{this.props.children}</div>
      </div>
    );
  }
}
