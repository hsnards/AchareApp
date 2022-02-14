import "./App.css";
import ViewAllAddresses from './components/ViewAllAddress';
import {Routes, Route, Link} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import {ToastContainer} from "react-toastify";

function App() {
    return (
          <>
              <ToastContainer
                    autoClose={3000}
                    newestOnTop
                    closeOnClick
                    rtl={true}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    hideProgressBar={false}/>


              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/all-addresses" element={<ViewAllAddresses/>}/>
              </Routes>
          </>
    );
}

export default App;
