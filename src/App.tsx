import type { Component } from 'solid-js';
import Conv2d from './modules/Conv2d';
import DownArrow from './modules/DownArrow';
import Footer from './modules/Footer';
import InputShape from './modules/InputShape';
import OutputShape from './modules/OutputShape';

const App: Component = () => {
  return <>
    <div id="App">
      <InputShape />
      <DownArrow height={50} width={60} />
      <Conv2d />
      <DownArrow height={50} width={60} />
      <OutputShape />
    </div>
    {/* <div style={{
        "width": "500px",
        "min-width": "500px",
        "min-height": "100%",
        "height": "100%",
        "background-color": "#DDDDDD",
        "opacity": 0.8,
        
        "display": "inline-block",
        "margin-top": "-100%"
      }}/> */}
    <Footer/>
  </>;
};

export default App;
