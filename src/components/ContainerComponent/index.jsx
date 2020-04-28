import React from 'react';
import PropTypes from 'prop-types';
import { BaseComponent } from '../';
import config from './config';

import { style } from './styles.module.scss';

class ContainerComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.config = config;
    this.style = style;
    this.modifiers = this.buildModifiers(this.props.modifiers);
  }

  buildModifiers = (modifiers) => {
    const { fluid } = modifiers;

    return `${config.type}${fluid ? '-fluid' : ''}`;
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
