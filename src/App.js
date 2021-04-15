import React, { Component } from 'react'
import SearchForm from './SearchForm/SearchForm';
import './App.css';
import ImageDisplay from './SearchForm/ImageDisplay';
import Homepage from './React_router/Homepage_reactRouter';

function App() {
  return (
    <div className="App">
        <SearchForm />
        <ImageDisplay/>
    </div>
  );
}

export default App;
