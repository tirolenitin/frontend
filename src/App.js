
import "./MyStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { AppNavigation } from './Component/AppNavigation/AppNavigation';

import { hotProducts } from "./services/ApiServices";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';



function App() {

  useEffect(()=>{
    hotProducts();
  },[])
  return (
    <div className="App">
        <ToastContainer
         position="top-right"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover/>
        <AppNavigation/>
    </div>
  );
}

export default App;
