import React from 'react';
import { connect } from 'react-redux';
import { removeComponent } from '../../../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

const ActionsRemove = ({ component, dispatch }) => {
  const handleExecuteAction = (id) => {
    if (window.confirm('Are you sure you want to remove this component?')) {
      dispatch.removeComponent({
        id,
      });
    }
  };

  return (
    <button
      onClick={() => handleExecuteAction(component.id)}
      className={styles['actions-button']}
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: {
      removeComponent: (payload) => dispatch(removeComponent(payload)),
    },
  };
};

export default connect(null, mapDispatchToProps)(ActionsRemove);
