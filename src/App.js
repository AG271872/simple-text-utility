import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms'
import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About'

// Router from 8 to 14
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {   // here alert is an object.
    setAlert({
      msg : message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggle = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light') 
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        {/* <Navbar title = "TextUtils" about = "About TextUtils" /> */}
        {/* <Navbar/> */}
        <Navbar title="TextUtils" mode={mode} toggleButton={toggle}  />
        <Alert alert={alert}/>
        <div className="container my-4">
          <Routes>
              {/* /users --> component1
              /users/home --> component2 */}
              <Route exact path="about" element={<About />}/>
              <Route exact path="/" element={<TextForms showAlert={showAlert} heading = "Enter the Text" mode={mode}/>}/>
          </Routes>
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
