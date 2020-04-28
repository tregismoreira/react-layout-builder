import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComponent } from '../../../store/actions';
import Popover from 'react-popover';
import { ReactSVG } from 'react-svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { availableComponents } from '../../../utils/constants';

import styles from './styles.module.scss';

class Actions extends Component {
  state = {
    open: false,
  };

  handleTogglePopover = () => {
    this.setState({ open: !this.state.open });
  };

  handleExecuteAction = (type) => {
    this.props.dispatch.addComponent({
      type,
      parent: this.props.component.id,
    });

    this.handleTogglePopover();
  };

  buildOptions = () => {
    return this.props.config.allowedChilds.map((type, key) => (
      <button
        className={styles['popover-button']}
        onClick={() => this.handleExecuteAction(type)}
        key={key}
      >
        <ReactSVG
          src={availableComponents[type].icon}
          className={styles['popover-button-icon']}
        />

        {availableComponents[type].label}
      </button>
    ));
  };

  render() {
    return (
      <div className={styles.actions}>
        <Popover
          isOpen={this.state.open}
          preferPlace="below"
          body={this.buildOptions()}
          onOuterAction={() => this.handleTogglePopover()}
          className={styles.popover}
        >
          <button
            onClick={() => this.handleTogglePopover()}
            className={styles['actions-button']}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </Popover>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: { addComponent: (payload) => dispatch(addComponent(payload)) },
  };
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
