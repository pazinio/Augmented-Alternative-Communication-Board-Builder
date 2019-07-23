import React from 'react'
import logo from './logo.svg'
import './App.css'
import Upload from './upload/Upload'


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src='logo1.png' className="App-logo" alt="logo" />
      </header>
    <body>
      <p>
        AAC Board Builder
      </p>

      <Upload />
    </body>
    </div>
  );
}

export default App;
