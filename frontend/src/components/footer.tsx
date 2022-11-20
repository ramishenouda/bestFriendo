import type { Component } from 'solid-js';
import facebookLogo from '../assets/facebook-logo.svg';
import twitterLogo from '../assets/twitter-logo.svg';
import redditLogo from '../assets/reddit-logo.svg';

const Footer: Component = () => {
  return (
    <div class="relative">
      <div class="flex flex-row justify-center">
        <div class="bg-white relative z-30 flex flex-row justify-center w-48">
          <img class="mr-3" src={facebookLogo} />
          <img class="mr-3" src={twitterLogo} />
          <img src={redditLogo} />
        </div>
      </div>
      <hr class="text-primary w-96  right-[50%] left-[50%] bottom-[50%] absolute translate-x-[-50%] bg-primary border-primary border-2" />
    </div>
  );
};

export default Footer;
