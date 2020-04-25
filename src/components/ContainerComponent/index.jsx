import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../BaseComponent';
import config from './config';

import { style } from './styles.module.scss';

class ContainerComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.name = config.name;
    this.style = style;
    this.modifiers = this.buildModifiers(this.props.modifiers);
  }

  buildModifiers = (modifiers) => {
    const { fluid } = modifiers;

    return `${this.name}${fluid ? '-fluid' : ''}`;
  };

  render() {
    return super.render();
  }
}

ContainerComponent.propTypes = {
  modifiers: PropTypes.shape({
    fluid: PropTypes.bool,
  }),
};

ContainerComponent.defaultProps = {
  modifiers: {
    fluid: false,
  },
};

export default ContainerComponent;
