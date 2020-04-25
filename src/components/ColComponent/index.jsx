import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../BaseComponent';
// import config from './config';

import styles from './styles.module.scss';

class ColComponent extends BaseComponent {
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
        className={`col ${this.buildSettings(this.props.settings)} ${
          styles.col
        }`}
      >
        {this.props.children}
      </div>
    );
  }
}

ColComponent.propTypes = {
  settings: PropTypes.shape({
    size: PropTypes.string,
    align: PropTypes.string,
    offset: PropTypes.string,
    margin: PropTypes.string,
  }),
};

ColComponent.defaultProps = {
  settings: {
    size: 'none',
    align: 'none',
    offset: 'none',
    margin: 'none',
  },
};

export default ColComponent;
