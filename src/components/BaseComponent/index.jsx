import React, { Component } from 'react';

class BaseComponent extends Component {
  handleAddChildComponent = () => {};
  handleOpenSettings = () => {};

  componentDidMount() {
    console.log(
      'This console.log is being run from the inside of BaseComponent.'
    );
  }
}

export default BaseComponent;
