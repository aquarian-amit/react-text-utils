import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');

  const [modeText, setModeText] = useState('Enable Dark Mode')

  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setModeText('Enable Light Mode')
      document.body.style.backgroundColor = '#0c346e';
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils- Dark Mode"
    } else {
      setMode('light')
      setModeText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils- Light Mode"

    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="All About" mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route exact path="/about" element={<About />} >
            </Route>

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} >

            </Route>

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
