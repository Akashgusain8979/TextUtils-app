import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";







function App() {

const [mode , setMode] = useState("light"); //whether dark mode is enabled or not
const [alert ,setAlert] = useState(null); 

const showAlert =(message, type)=>{
setAlert({
  msg : message,
  type : type
})
setTimeout(() => {
  setAlert(null);
}, 1500);
}

const toggleMode =()=>{
if(mode === "light"){
  setMode('dark');
  document.body.style.backgroundColor = "#30529f";
  showAlert("Dark mode has been enabled", "success");
}
else{
  setMode("light");
  document.body.style.backgroundColor = "white";
  showAlert("Light mode has been enabled", "success");
}
}

  return (
    <>
    {/* {/* <Router> */}
      <Navbar title="TextUtils"  aboutText="About" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3" > 
        {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route excat path="/" element={<TextForm  heading="Enter Text to Analyze Below" mode={mode} showAlert={showAlert}/>} /> */}
        {/* </Routes> */}
        <TextForm  heading="Enter Text to Analyze Below" mode={mode} showAlert={showAlert}/>
     </div>
     {/* </Router> */} 
    
    
</>
    
  );
}

export default App;
