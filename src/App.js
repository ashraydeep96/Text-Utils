// import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import Textform from './components/Textform';
// import About from './components/About';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router, Routes, Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
    

  const toggleMode= ()=>{
    if(mode === 'light'){
    setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been Enabled", "success");
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes> */}
        {/* <Route exact path='/' element={<Textform showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />}></Route> */}
        <Textform showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />
        {/* <Route exact path='/about' element={<About />}></Route> */}
      {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
