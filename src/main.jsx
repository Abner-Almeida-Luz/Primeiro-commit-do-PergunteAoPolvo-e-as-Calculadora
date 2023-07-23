import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import App from './App.jsx';
import CalculadoraDeInvestimentos from './routes/calculadoradeinvestimentos/calculadoradeinvestimentos.jsx';
import PergunteAoPolvo from './routes/pergunteaopolvo/pergunteaopolvo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/CalculadoraDeInvestimentos",
        element : <CalculadoraDeInvestimentos/>,
      },
      {
        path: "/PergunteAoPolvo",
        element : <PergunteAoPolvo/>,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} >
      <App/>
    </RouterProvider>
  </React.StrictMode>,
)
