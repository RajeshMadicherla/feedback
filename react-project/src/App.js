/* eslint-disable react/style-prop-object */
import { Component } from "react";
import {BrowserRouter, Route, Routes, Redirect} from 'react-router-dom'



import Rating from "./components/Rating";
import Feedback from "./components/Feedback";

class App extends Component{
  render(){
    return(
      <>
      <Routes>
        <Route path="/" element={<Rating />} ></Route>
        <Route path="/feedback" element={<Feedback />} ></Route>
      </Routes>
      
      </>
      
      
    );
  }
}
 

export default App;
