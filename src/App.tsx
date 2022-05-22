import type { Component } from 'solid-js';
import Conv2d from './modules/Conv2d';
import DownArrow from './modules/DownArrow';
import Footer from './modules/Footer';
import InputShape from './modules/InputShape';
import OutputShape from './modules/OutputShape';

const App: Component = () => {
  return <>
    <div class="App">
      <InputShape />
      <DownArrow height={50} width={60} />
      <Conv2d />
      <DownArrow height={50} width={60} />
      <OutputShape />
    </div>
    <Footer/>
  </>;
};

export default App;
