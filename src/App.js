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

      {/* <header className="App-header"> */}
      <p> <img src='logo1.png' className="App-logo" alt="logo" />
      Augmented & Alternative Communication Board Builder </p>

      {/* </header> */}
    
    {/* <body>  */}
      
      <div>
        {
          this.state.uploaded ?  
          <div>
            <p> {this.state.resp.subject} </p>
              Subject:  <img className="subject-img" src={this.state.resp.iconUri } alt=''/> 
              Original: <img className="subject-img" src={this.state.resp.originalImageUri } alt=''/> 

            <BasicLayout arr = {this.state.resp.objects} /> 
            <div> Actions: </div> 
            <BasicLayout arr = {this.state.resp.actions} /> 
            <div> Rections: </div> 
            <BasicLayout arr = {this.state.resp.reactions} /> 
        </div>
        : 
        <Upload uploadedHandler = {this.uploadedHandler} />
        }
      </div>
    {/* </body> */}
    </div>
  );
  }
}

export default App;
