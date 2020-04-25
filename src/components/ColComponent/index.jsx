import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../BaseComponent';
import config from './config';

import styles from './styles.module.scss';

class ColComponent extends BaseComponent {
  buildSettings = (settings) => {
    const classes = [];
    const { size, align, offset, margin } = settings;

    if (size && size !== 'none') {
      classes.push(size);
    }

    if (align && align !== 'none') {
      classes.push(align);
    }

    if (offset && offset !== 'none') {
      classes.push(offset);
    }

    if (margin && margin !== 'none') {
      classes.push(margin);
    }

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
