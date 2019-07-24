import React from 'react'
// import logo from './logo.svg'
import './App.css'
import Upload from './upload/Upload'
// import MyResponsiveGrid from './gridlayout/GridLayout'
import BasicLayout from './gridlayout/BasicLayout'
import { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props);
    this.uploadedHandler = this.uploadedHandler.bind(this);
    this.state = {
      uploaded: false
    }
  }

  uploadedHandler(uploaded, resp) {
    this.setState({
      uploaded,
      resp
    })
  }

  render() {
    return (
    <div className="App">

      <header className="App-header">
        <img src='logo1.png' className="App-logo" alt="logo" />
      </header>
    
    <body> 
      <p> AAC Board Builder </p>
      
      <div>
        {
          this.state.uploaded ?  
        <BasicLayout resp = {this.state.resp} /> 
        : 
        <Upload uploadedHandler = {this.uploadedHandler} />
        }
      </div>
    </body>
    </div>
  );
  }
}

export default App;
