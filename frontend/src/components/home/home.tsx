import type { Component } from 'solid-js';
import './home.css';

import background from '../../assets/home-background.svg';

const Home: Component = () => {
  return (
    <div class="flex lg:flex-row flex-col items-center justify-center">
      <div>
        <p class="text-primary font-semibold stranger-text text-[40px]">
          From a complete stranger to a{' '}
          <span class="relative">
            BestFriendo <span class="absolute no-select top-[26px] left-0 text-white absolute-text">BestFriendo</span>
          </span>
        </p>
        <div class="mt-20">
          <p class="text-primary font-medium  text-3xl">Connect with a friendo:</p>
          <div class="mb-4">
            <button class="bg-primary text-white font-medium text-3xl rounded-xl w-[300px] lg:w-[200px] py-3 mr-1">Video</button>
            <button class="border-primary border-2 text-primary font-medium text-3xl rounded-xl w-[300px] lg:w-[200px] py-3 ml-1">
              Text
            </button>
          </div>
          <p>Note: Your video is monitored, please keep it clean</p>
        </div>
      </div>
      <div>
        <img src={background} />
      </div>
    </div>
  );
};

export default Home;
