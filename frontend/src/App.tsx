import type { Component } from 'solid-js';
import Home from './components/home/home';
import Navbar from './components/navbar';

const App: Component = () => {
  return (
    <div class="lg:px-20 px-5">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
