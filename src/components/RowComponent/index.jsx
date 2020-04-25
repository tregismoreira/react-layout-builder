import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../BaseComponent';
import config from './config';

import styles from './styles.module.scss';

class RowComponent extends BaseComponent {
  buildSettings = (settings) => {
    const classes = [];
    const { align, justify } = settings;

    if (align && align !== 'none') {
      classes.push(align);
    }

    if (justify && justify !== 'none') {
      classes.push(justify);
    }

    return classes.join(' ');
  };

  render() {
    return (
      <div
        className={`row ${this.buildSettings(this.props.settings)} ${
          styles.row
        }`}
      >
        {this.props.children}
      </div>
    );
  }
}

RowComponent.propTypes = {
  settings: PropTypes.shape({
    align: PropTypes.string,
    justify: PropTypes.string,
  }),
};

RowComponent.defaultProps = {
  settings: {
    align: 'none',
    justify: 'none',
  },
};

export default RowComponent;
