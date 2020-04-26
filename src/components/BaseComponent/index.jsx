import React, { Component } from 'react';
import { connect as reduxConnect } from 'react-redux';
import { addComponent } from '../../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

export class BaseComponent extends Component {
  constructor(props) {
    super(props);

    this.config = null;
    this.style = null;
    this.modifiers = null;
  }

  handleAddChildComponent = (e, props) => {
    e.preventDefault();

    let type;

    switch (props.type) {
      case 'container':
        type = 'row';
        break;
      case 'row':
        type = 'col';
        break;
      case 'col':
        type = 'row';
        break;
      default:
        type = null;
    }

    if (type) {
      this.props.dispatch.addComponent({
        type,
        parent: props.id,
      });
    }
  };

  handleOpenModifiers = () => {};

  render() {
    return (
      <div className={`${this.modifiers} ${this.style} ${styles.wrapper}`}>
        {this.props.children}
        <div className={styles['actions']}>
          <a
            href="#"
            onClick={(e) => this.handleAddChildComponent(e, this.props)}
            className={styles['actions--add']}
          >
            <FontAwesomeIcon icon={faPlus} />
          </a>
        </div>
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

export const connect = (Component) => {
  return reduxConnect(mapStateToProps, mapDispatchToProps)(Component);
};

export default connect(BaseComponent);
