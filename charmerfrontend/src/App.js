import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ImgAge from './components/ImgAge';
import AudioGender from './components/AudioGender';
import Emotion from './components/Emotion';
import ImgEncry from './components/ImgEncry';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ImgAge" element={<ImgAge />} />
        <Route path="/AudioGender" element={<AudioGender />} />
        <Route path="/Emotion" element={<Emotion />} />
        <Route path="/ImgEncry" element={<ImgEncry />} />
        
        </Routes>
    </Router>
  );
}

export default App;

