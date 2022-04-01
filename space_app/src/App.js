import { Routes, Route } from "react-router-dom";
import Main from './main';
function App() {
  return (
    <div>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');
</style>

      <Routes>
          <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
