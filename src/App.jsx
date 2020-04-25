import React from 'react';
import { Wrapper } from './components';

import './assets/scss/main.scss';

function App() {
  return (
    <main>
      <Wrapper type="container">
        <Wrapper type="row">
          <Wrapper type="col"></Wrapper>
          <Wrapper type="col"></Wrapper>
        </Wrapper>
        <Wrapper type="row">
          <Wrapper type="col"></Wrapper>
          <Wrapper type="col"></Wrapper>
          <Wrapper type="col"></Wrapper>
        </Wrapper>
      </Wrapper>
    </main>
  );
}

export default App;
