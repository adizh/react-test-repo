import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import EachCountry from "./component/EachCountry.jsx";
import CodeCountry from "./component/CodeCountry.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:country" element={<EachCountry />} />
        <Route path="/:code" element={<CodeCountry />} />
      </Routes>
    </>
  );
}
export default App;
