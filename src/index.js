import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route  } from "react-router-dom";



import SpellingGame from "./components/SpellingGame"
import SpellingGame2 from "./components/SpellingGame2..js"
import SpellingGame3 from "./components/SpellingGame3"
import Games from "./components/Games"
import PointsProvider  from './components/PointsProvider';
import ReadingGame from "./components/ReadingGame"
import ReadingGame2 from "./components/ReadingGame2"

render(
  <BrowserRouter>
         <PointsProvider>
       <Routes>
          <Route path="/" element={<App />} />
          
          <Route path="games" element={<Games />} />
         
          <Route path="games/spellingGame" element={<SpellingGame />} />
          <Route path="games/readingGame" element={<ReadingGame />} />
          <Route path="games/spellingGame2" element={<SpellingGame2 />} />
          <Route path="games/spellingGame3" element={<SpellingGame3 />} />
          <Route path="games/readingGame2" element={<ReadingGame2 />} />
       </Routes>
       </PointsProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
