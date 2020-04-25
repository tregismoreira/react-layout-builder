import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../BaseComponent';
import config from './config';

import styles from './styles.module.scss';

class ContainerComponent extends BaseComponent {
  buildSettings = (settings) => {
    const classes = [];
    const { fluid } = settings;

    if (fluid) {
      classes.push('container-fluid');
    } else {
      classes.push('container');
    }

    return classes.join(' ');
  };

  render() {
    return (
      <div
        className={`${this.buildSettings(this.props.settings)} ${
          styles.container
        }`}
      >
        {this.props.children}
      </div>
    );
  }
}

ContainerComponent.propTypes = {
  settings: PropTypes.shape({
    fluid: PropTypes.bool,
  }),
};

ContainerComponent.defaultProps = {
  settings: {
    fluid: false,
  },
};

export default ContainerComponent;
