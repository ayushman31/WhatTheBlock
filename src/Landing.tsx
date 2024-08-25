import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./App.css"; // Ensure this file includes Tailwind directives

const Landing: React.FC = () => {
  return (
    <div>
      <div className="p-4">
        <div className="flex items-center place-content-center">
          <img 
            className="h-14 mr-4 w-auto animate-pulse blur-sm"
            src="https://imgs.search.brave.com/mgW2QFWkpw3s92nw50gvVYuzid-Gx4B0lTLv8dWxaq8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Y2pkb3duZXIvY3J5/cHRvY3VycmVuY3kt/ZmxhdC81MTIvRXRo/ZXJldW0tRVRILWlj/b24ucG5n"
          ></img>
          <h1 className="w-min text-6xl font-extrabold  ">WhatTheBlock</h1>
          <img
            className="h-14 ml-4 w-auto rounded-100% animate-pulse blur-sm"
            src="https://imgs.search.brave.com/vA8y8wGcYOsbDE5mHwviKnyY052sS6irnHtcp5PQQAQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1X2hj/czJuL3N0eWxlcy9j/b21tdW5pdHlJY29u/X2o3M3U0ODU2MXk2/ODEucG5n"
          ></img>
        </div>
      </div>

      <div className="flex items-center place-content-center gap-44 mt-48 ">
        <Link to="/ethereum"><img
          className="h-44 mr-4 w-auto hover:h-56 duration-500"
          src="https://imgs.search.brave.com/mgW2QFWkpw3s92nw50gvVYuzid-Gx4B0lTLv8dWxaq8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Y2pkb3duZXIvY3J5/cHRvY3VycmVuY3kt/ZmxhdC81MTIvRXRo/ZXJldW0tRVRILWlj/b24ucG5n"
        ></img></Link>
        <Link to="/solana"><img
          className="h-44 ml-4 w-auto rounded-100% hover:h-56 duration-500"
          src="https://imgs.search.brave.com/vA8y8wGcYOsbDE5mHwviKnyY052sS6irnHtcp5PQQAQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1X2hj/czJuL3N0eWxlcy9j/b21tdW5pdHlJY29u/X2o3M3U0ODU2MXk2/ODEucG5n"
        ></img></Link>

        
      </div>

      <div className="m-20 flex items-center place-content-center">
        <h1 className="text-2xl font-bold text-gray-400">Click on the blockchain of which you want to check the balance.</h1>
      </div>
    </div>
  );
};

export default Landing;
