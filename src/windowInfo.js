
import React from 'react';
import logo from './logo.svg';
import './App.css';

class WindowInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      screenWidth: 0,
      screenHeight: 0,
    }
  }

  updateWindowDimensions = () => {
    this.setState({
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth
    })
  }


  componentDidMount = () => {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }



  render() {
    const { screenHeight, screenWidth } = this.state
    return (
      <>
        <p>Screen Height = {screenHeight}</p>
        <p>Screen Width =  {screenWidth}</p>
      </>
    );
  }
}

export default WindowInfo;
