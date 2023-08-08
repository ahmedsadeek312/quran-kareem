import "./App.css";
import { Route, Routes } from "react-router-dom";
import AhmedAlagmy from "./components/AhmedAlagmy";
import HomePage from "./components/HomePage";
import MosharyRashed from "./components/MosharyRashed";
import Abdulbasit from "./components/Abdulbasit";
import Abdurrahmaansudais from "./components/Abdurrahmaansudais";
import Husarymujawwad from "./components/Husarymujawwad";
import Shaatree from "./components/Shaatree";
import Hudhaify from "./components/Hudhaify";
import Mahermuaiqly from "./components/Mahermuaiqly";
import Minshawi from "./components/Minshawi";
import Saoodshuraym from "./components/Saoodshuraym";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ahmedAlagmy" element={<AhmedAlagmy />} />
        <Route path="/mosharyRashed" element={<MosharyRashed />} />
        <Route path="/Abdulbasit" element={<Abdulbasit />} />
        <Route path="/abdurrahmaansudais" element={<Abdurrahmaansudais />} />
        <Route path="/husarymujawwad" element={<Husarymujawwad />} />
        <Route path="/shaatree" element={<Shaatree />} />
        <Route path="/hudhaify" element={<Hudhaify />} />
        <Route path="/mahermuaiqly" element={<Mahermuaiqly />} />
        <Route path="minshawi" element={<Minshawi />} />
        <Route path="/saoodshuraym" element={<Saoodshuraym />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
