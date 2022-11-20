import type { Component } from 'solid-js';
import Navbar from './components/navbar';

const App: Component = () => {
  return (
    <div>
      <Navbar />
      <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
    </div>
  );
};

export default App;
