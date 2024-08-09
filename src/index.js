import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import ScrollContextProvider from './Context/scrollContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CartContextProvider from './Context/cart-context';
import HolderEleContextProvider from './Context/hold-element';
import WindowProvider from './Context/WindowContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollContextProvider>
          <CartContextProvider>
            <HolderEleContextProvider>
              <WindowProvider>
                <App />
              </WindowProvider>
            </HolderEleContextProvider>
          </CartContextProvider>
        </ScrollContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode >
);



