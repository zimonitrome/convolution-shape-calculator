import { createEffect, type Component } from 'solid-js';
import Conv2d from './modules/Conv2d';
import DownArrow from './modules/DownArrow';
import Footer from './modules/Footer';
import InputShape from './modules/InputShape';
import OutputShape from './modules/OutputShape';
import TimelineControl from './modules/TimelineControl';
import TopBar from './modules/TopBar';
import { theme } from './modules/theme';

const App: Component = () => {
  createEffect(() => {
    document.documentElement.dataset.theme = theme();
  });

  return <>
    <TopBar />
    <div id="App">
      <TimelineControl />
      <div>
        <InputShape />
        <DownArrow />
        <Conv2d />
        <DownArrow />
        <OutputShape />
      </div>
    </div>
    <Footer/>
  </>;
};

export default App;
