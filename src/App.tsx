import React from 'react';
import WalletBalance from './Ethereum';
import './App.css';
import Landing from './Landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Ethereum from './Ethereum';
import Solana from './Solana';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/ethereum",
    element: <Ethereum />
  },
  {
    path: "/solana",
    element: <Solana />
  }
]);

const App: React.FC = () => {
    return (
        <div className='bg-slate-200 h-screen'>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default App;
