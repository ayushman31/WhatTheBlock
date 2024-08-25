import React, { useState } from "react";
import { Alchemy, Utils } from "alchemy-sdk";
import "./App.css"; // Ensure this file includes Tailwind directives

const Ethereum: React.FC = () => {
  const [publicKey, setPublicKey] = useState<string>("");
  const [balance, setBalance] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchBalance = async () => {
    try {
      const apiKey = "";
      const settings = {
        apiKey: apiKey,
      };

      const alchemy = new Alchemy(settings);

      if (!publicKey) {
        throw new Error("Public key is required");
      }

      let resolvedAddress = publicKey;

      if (publicKey.includes(".")) {
        resolvedAddress = await alchemy.core.resolveName(publicKey);

        if (!resolvedAddress) {
          throw new Error("ENS name could not be resolved");
        }
      }

      let rawBalance = await alchemy.core.getBalance(resolvedAddress, "latest");
      let formattedBalance = Utils.formatEther(rawBalance);

      setBalance(formattedBalance);
      setError(null);
    } catch (err) {
      setError(`Failed to fetch balance: ${err.message}`);
      setBalance(null);
      console.error("Error fetching balance:", err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchBalance();
  };

  return (
    
    <div className="p-4">
      <div className="flex items-center place-content-center">
        <img
          className="h-14 mr-4 w-auto animate-pulse"
          src="https://imgs.search.brave.com/mgW2QFWkpw3s92nw50gvVYuzid-Gx4B0lTLv8dWxaq8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Y2pkb3duZXIvY3J5/cHRvY3VycmVuY3kt/ZmxhdC81MTIvRXRo/ZXJldW0tRVRILWlj/b24ucG5n"
        ></img>
        <h1 className="w-min text-6xl font-extrabold cent ">WhatTheBlock</h1>
        <img
          className="h-14 ml-4 w-auto rounded-100%  blur-sm"
          src="https://imgs.search.brave.com/vA8y8wGcYOsbDE5mHwviKnyY052sS6irnHtcp5PQQAQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1X2hj/czJuL3N0eWxlcy9j/b21tdW5pdHlJY29u/X2o3M3U0ODU2MXk2/ODEucG5n"
        ></img>
      </div>


        <div className="flex items-center place-content-center mt-32">

        <img
          className="mr-32 w-auto h-56 duration-500 hover:brightness-110"
          src="https://imgs.search.brave.com/mgW2QFWkpw3s92nw50gvVYuzid-Gx4B0lTLv8dWxaq8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Y2pkb3duZXIvY3J5/cHRvY3VycmVuY3kt/ZmxhdC81MTIvRXRo/ZXJldW0tRVRILWlj/b24ucG5n"
        ></img>

      <div className="border-2 w-1/2 p-10 mt-16 border-blue-500 border-4 rounded-2xl  justify-center">
        <div>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              value={publicKey}
              onChange={(e) => setPublicKey(e.target.value)}
              placeholder="Enter Ethereum Public Key"
              className="border border-gray-300 p-2 rounded w-1/2"
              required
            />
            <button
              type="submit"
              className=" bg-blue-500 text-white p-2 rounded ml-20"
            >
              Check Balance
            </button>
          </form>
        </div>
        <div className="mt-10 font-semibold text-xl flex">
          Balance :
          {error && (
            <div className="text-red-500 mt-2">Error in fetching balance.</div>
          )}
          {balance !== null && !error && <div className="ml-4">{balance} ETH </div>}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Ethereum;
