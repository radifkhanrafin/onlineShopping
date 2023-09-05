import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Component/Shop/Shop';
import Layout from './Component/Layout/Layout';
import Cart from './Component/Cart/Cart';
import { QueryClient, QueryClientProvider } from 'react-query';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },

    ]
  },
]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
  </React.StrictMode>,
)
