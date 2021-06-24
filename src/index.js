import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { configureStore } from './store/reducers/configureStore';
import "react-toastify/dist/ReactToastify.min.css"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter> <App /> </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Burada <App /> ile belirtilen satır bizim ana component'imizdir. Bir root component dir.
// Yapılanma; root component >; Navi > CartSummary ; Category, Product
// Burada   <App />, document.getElementById('root') Bu ifadeyle app componentini root'a yerleştir anlamına geliyor.
// index.js çalıştıktan sonra ReactDOM.render çalıştırılır.
// Ve root'a App monte edilir. Burada App'nin altında çalışan henüz bir component yoktur.

// <Provider store={store}> component'ine  store parametresini geçip uygulamamazı Provider component'iyle 
// sarmallayarak uygulamamızın tamamında react redux altyapısını uygulayarak store'u kulanmayı sağlıyor.