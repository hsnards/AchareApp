
import "./App.css";
import ViewAllAddresses from './components/ViewAllAddress';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all-addresses" element={<ViewAllAddresses />} />
      </Routes>
  );
}

export default App;
