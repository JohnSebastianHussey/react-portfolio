import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home';
import { ForeverBeatsDetails } from './pages/ForeverBeats';
import { NptGeneratorDetails } from './pages/NptGenerator';


let router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/foreverbeats",
    element: <ForeverBeatsDetails />
  },
  {
    path: "/npt-generator",
    element: <NptGeneratorDetails />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
