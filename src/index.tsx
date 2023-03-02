import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Search from "./Routes/Search";
import Video from "./Routes/Video";
import Layout from "./Routes/Layout";
import Welcome from "./Routes/Welcome";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Layout />}>
                  <Route path={"/"} element={<Welcome />} />
                  <Route path={"/search"} element={<Search />} />
                  <Route path={"/video/:videoId"} element={<Video />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
