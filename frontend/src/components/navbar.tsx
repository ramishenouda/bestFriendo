import type { Component } from 'solid-js';
import logo from '../assets/logo.svg'

const Navbar: Component = () => {
  return (
    <p class="text-4xl pl-5">
      <img src={logo} />
    </p>
  );
};

export default Navbar;
