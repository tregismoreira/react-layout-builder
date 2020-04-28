import React from 'react';
import PropTypes from 'prop-types';
import { BaseComponent } from '../';
import config from './config';

import { style } from './styles.module.scss';

class ColComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.config = config;
    this.style = style;
    this.modifiers = this.buildModifiers(this.props.modifiers);
  }

  buildModifiers = (modifiers) => {
    const classes = [config.type];

    Object.values(modifiers).forEach((value) => {
      if (value !== 'none') {
        classes.push(value);
      }
    });

    return classes.join(' ');
  };

  render() {
    return super.render();
  }
}

ColComponent.propTypes = {
  modifiers: PropTypes.shape({
    size: PropTypes.string,
    align: PropTypes.string,
    offset: PropTypes.string,
    margin: PropTypes.string,
  }),
};

ColComponent.defaultProps = {
  modifiers: {
    size: 'none',
    align: 'none',
    offset: 'none',
    margin: 'none',
  },
};

export default ColComponent;
