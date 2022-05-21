import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

import InputControls from './modules/InputControls';
import FilterControls from './modules/FilterControls';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <InputControls/>
        <FilterControls/>
      </header>
    </div>
  );
};

export default App;
