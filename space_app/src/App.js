import { Routes, Route } from "react-router-dom";
import Main from './main';
import Planet from "./planet";
import './normalize.css'
import music from './freezing-night-28066.mp3'
import { useEffect } from "react";
function App() {
  useEffect(() => {
    let audio = new Audio(music)
    audio.currentTime = 0;
    audio.autoplay='true'
    audio.play();
    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      audio.play();
    }, false);
  },[])
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');
      </style>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/planets/:name" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
