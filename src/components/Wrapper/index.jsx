import React from 'react';
import PropTypes from 'prop-types';

import ContainerComponent from '../ContainerComponent';
import RowComponent from '../RowComponent';
import ColComponent from '../ColComponent';
import UndefinedComponent from '../UndefinedComponent';

const ComponentTypes = {
  container: ContainerComponent,
  row: RowComponent,
  col: ColComponent,
  und: UndefinedComponent,
};

const Wrapper = (props) => {
  const RenderComponent = ComponentTypes[props.type]
    ? ComponentTypes[props.type]
    : ComponentTypes['und'];

  return <RenderComponent {...props} />;
};

Wrapper.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Wrapper;
