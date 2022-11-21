import type { Component } from 'solid-js';
import Footer from './components/footer';
import { Home, HomeSmallScreens } from './components/home/home';
import Navbar from './components/navbar';

const App: Component = () => {
  return (
    <div class="lg:px-20 px-5">
      <Navbar />
      <div class="hidden sm:block">
        <Home />
      </div>
      <div class="block sm:hidden">
        <HomeSmallScreens />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
