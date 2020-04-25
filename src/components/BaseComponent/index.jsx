import React, { Component } from 'react';

class BaseComponent extends Component {
  constructor(props) {
    super(props);

    // Set the machine name.
    this.name = '';

    // Set custom styles.
    this.style = '';

    // Set the class modifiers.
    this.modifiers = '';
  }

  handleAddChildComponent = () => {};
  handleOpenModifiers = () => {};

  render() {
    return (
      <div className={`${this.modifiers} ${this.style}`}>
        {this.props.children}
      </div>
    );
  }
}

export default BaseComponent;
