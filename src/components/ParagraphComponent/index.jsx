import React from 'react';
import { BaseComponent } from '../';
import config from './config';

class ParagraphComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.config = config;
  }

  render() {
    return (
      <p>
        Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula
        porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Cras mattis consectetur purus sit amet fermentum. Praesent commodo
        cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam
        eget risus varius blandit sit amet non magna.
      </p>
    );
  }
}

export default ParagraphComponent;
