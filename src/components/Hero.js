// src/Hero.js
import React from 'react';
import './Hero.css';
import { Box, Typography, Button, Container } from '@mui/material';
import styled from '@emotion/styled';

const HeroBox = styled(Box)`
  padding: 50px 0;
  background-color: #e0f7fa;
  text-align: center;
`;


const Hero = ({ onOpenModal }) => {
  return     <main class=" relative overflow-hidden">
  <div class="bg-white dark:bg-white-800 p-20  flex relative z-20 items-center">
      <div class="container bg1 mx-auto   flex relative">
          <div class="sm:w-2/3 lg:w-2/5 flex p-20 flex-col relative z-20">

              <h1 class=" textdes mt-20 sm:text-7xl font-black  flex flex-col leading-none dark:text-black text-gray-800">
                  Let's Learn
                  <span class="text-5xl sm:text-7xl">
                      & Earn
                  </span>
              </h1>
              <p class=" textdes mt-10 sm:text-2xl   flex flex-col leading-none dark:text-black text-gray-800">
                 Get a chance to win 
                 <span class="text-2xl sm:text-2xl">
                      up-to <span class="text-2xl text-blue-800 sm:text-3xl">R.S 15,0000</span>
                  </span>
              </p>
              <div class="flex mt-8">
                  <a href="#" class="py-2 px-4 rounded-lg bg-blue-500 border-2 border-transparent text-white text-md mr-4" onClick={onOpenModal}>
                      Refer Now
                  </a>
                  
              </div>
          </div>
          <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
  <img
    src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hIbh0cHW8rTmM860DX4~6Bf0tZgFlRVDcCJq1vgRkfZfjvUJ0~6ox9wYsO-qQ9R7CdUzK~09lhsg8-vQzN1MZ7xNYA-MtvlsOoJLC9xm6~YRIq2E4X5HYwvPC4tQw8dRdgAevuI0sSzUE6H-3uuZdu4ioHUI~qWqzoEyE8qvwkCKbal02~7fpDpgVreiA9xhSNAhP4Pi9VGj3tOHn7cPsCdYUsJufpLnQK7zf9Bhe~ZxOlekRM2QdociYG4bgLpe6U6RZFR6ImpQ8PQzww8j-m69ytI1zeA9PQdhXEXOSw5L2iLP6UMD8hV9uEB7ODNsuESyTo59t17DJFLkThXFKA__"
    class="heroimg"
    alt="Description"
  />
</div>

      </div>
  </div>
</main>


};

export default Hero;
