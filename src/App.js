
import { useState } from "react";
import "./App.css";
import CompleteInformation from "./components/CompleteInformation";
import ChooseLocation from './components/ChooseLocation';
import ViewAllAddresses from './components/ViewAllAddress';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [showForm , setShowForm] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={showForm  ? <CompleteInformation /> : <ChooseLocation />} />
        <Route exact path="/all-addresses" element={<ViewAllAddresses />} />
      </Routes>
    </div>
  );
}

export default App;
