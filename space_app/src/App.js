import { Routes, Route } from "react-router-dom";
import Main from './main';
import Planet from "./planet";
import Planetspreview from "./planets";
import Rockets from "./rockets";
import NasaRockets from "./nasa/nasa-rockets";
import './normalize.css'
function App() {
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');
      </style>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/planets/:name" element={<Planet />} />
        <Route path="/planets" element={<Planetspreview/>} />
        <Route path="/rockets" element={<Rockets/>} />
        <Route path="/rockets/nasa" element={<NasaRockets/>} />
      </Routes>
    </div>
  );
}

export default App;
