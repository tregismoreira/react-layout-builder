import React from 'react';
import PropTypes from 'prop-types';
import { connect, BaseComponent } from '../BaseComponent';
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
    const classes = [config.name];

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

export default connect(RowComponent);
