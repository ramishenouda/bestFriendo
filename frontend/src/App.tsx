import type { Component } from 'solid-js';
import Footer from './components/footer';
import Home from './components/home/home';
import Navbar from './components/navbar';

const App: Component = () => {
  return (
    <div class="lg:px-20 px-5">
      <Navbar />
      <Home />
      <div class="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
