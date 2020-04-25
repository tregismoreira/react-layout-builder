import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../BaseComponent';
import config from './config';

import styles from './styles.module.scss';

class RowComponent extends BaseComponent {
  // Build the classes according to the component settings.
  buildSettings = (settings) => {
    const classes = [];

    Object.values(settings).forEach((value) => {
      if (value !== 'none') {
        classes.push(value);
      }
    });

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
