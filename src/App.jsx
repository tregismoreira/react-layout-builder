import React from 'react';
import { ContainerComponent, RowComponent, ColComponent } from './components';

import './assets/scss/main.scss';

function App() {
  return (
    <main>
      <ContainerComponent>
        <RowComponent>
          <ColComponent>Col</ColComponent>
          <ColComponent>Col</ColComponent>
        </RowComponent>
        <RowComponent>
          <ColComponent>Col</ColComponent>
        </RowComponent>
        <RowComponent>
          <ColComponent>Col</ColComponent>
          <ColComponent>Col</ColComponent>
          <ColComponent>Col</ColComponent>
        </RowComponent>
      </ContainerComponent>
    </main>
  );
}

export default App;
