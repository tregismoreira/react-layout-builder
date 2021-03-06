import React from 'react';
import PropTypes from 'prop-types';
import { BaseComponent } from '../';
import config from './config';

import { style } from './styles.module.scss';

class RowComponent extends BaseComponent {
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

RowComponent.propTypes = {
  modifiers: PropTypes.shape({
    align: PropTypes.string,
    justify: PropTypes.string,
  }),
};

RowComponent.defaultProps = {
  modifiers: {
    align: 'none',
    justify: 'none',
  },
};

export default RowComponent;
