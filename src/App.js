import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeBase from './base/HomeBase';
import Home from './pages/home';
import About from './pages/User/About/About'; // make sure this path is correct


// define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeBase />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      // Uncomment as needed:
      // {
      //   path: '/ActivityPage',
      //   element: <ActivityPage />,
      // },
      // {
      //   path: '/HumanRights',
      //   element: <HumanRights />,
      // },
      // {
      //   path: '/FAQ',
      //   element: <FAQ />,
      // },
      // {
      //   path: '/Act',
      //   element: <Act />,
      // },
      // {
      //   path: '/Contact',
      //   element: <Contact />,
      // },
      // {
      //   path: '/membership',
      //   element: <Membership />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
