import type { Component } from 'solid-js';

import styles from './index.css';

import InputControls from './modules/InputControls';
import FilterControls from './modules/FilterControls';
import { Container } from './modules/Container';

const App: Component = () => {
  return (
    <div class="App">
      <header class="header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Container>
          <InputControls/>
          <FilterControls/>
        </Container>
      </header>
    </div>
  );
};

export default App;
