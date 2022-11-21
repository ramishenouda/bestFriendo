import type { Component } from 'solid-js';
import './home.css';

import background from '../../assets/home-background.svg';

export const Home: Component = () => {
  return (
    <div class="flex lg:flex-row flex-col items-center justify-center">
      <div>
        <p class="text-primary font-semibold stranger-text text-[40px]">
          From a complete stranger to a
          <span class="relative">
            BestFriendo <span class="no-select top-[26px] left-0 text-white absolute-text">BestFriendo</span>
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
          <p class="text-primary">Note: Your video is monitored, please keep it clean</p>
        </div>
      </div>
      <div>
        <img src={background} />
      </div>
    </div>
  );
};

export const HomeSmallScreens: Component = () => {
  return (
    <div class="flex lg:flex-row flex-col items-center justify-center">
      <div>
        <img src={background} />
      </div>
      <div>
        <p class="text-primary text-center font-semibold stranger-text text-2xl">
          From a complete stranger to a
          <span class="relative">
            BestFriendo <span class="no-select top-[16px] left-0 text-white absolute-text">BestFriendo</span>
          </span>
        </p>
        <div class="mt-20">
          <p class="text-primary font-medium text-center  text-2xl">Connect with a friendo:</p>
          <div class="mb-4">
            <button class="bg-primary text-white font-medium text-2xl lg:text-3xl rounded-xl  w-[150px] lg:w-[200px] py-3 mr-1">
              Video
            </button>
            <button class="border-primary border-2 text-primary font-medium text-2xl lg:text-3xl rounded-xl  w-[150px] lg:w-[200px] py-3 ml-1">
              Text
            </button>
          </div>
          <p class="text-primary text-center my-20">Note: Your video is monitored, please keep it clean</p>
        </div>
      </div>
    </div>
  );
};
