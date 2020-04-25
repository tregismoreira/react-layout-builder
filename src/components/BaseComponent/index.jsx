import React, { Component } from 'react';

class BaseComponent extends Component {
  componentDidMount() {
    console.log(
      'This console.log is being run from the inside of BaseComponent.'
    );
  }

  allowedChilds = [];
  availableSettings = {};

  handleAddChildComponent = () => {};
  handleOpenSettings = () => {};
}

export default BaseComponent;
