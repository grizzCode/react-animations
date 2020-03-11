import React from 'react';
import './App.css';
import WindowInfo from './windowInfo';
import Animation from './animation'
import Hover from './hover';

class App extends React.Component {
  constructor(props){
    super(props)
   
  }

  updateWindowDimensions = () => {
    // this.setState({
    //   screenHeight: window.innerHeight,
    //   screenWidth: window.innerWidth
    // })
  }


  componentDidMount = () => {
    // this.updateWindowDimensions()
    // window.addEventListener('resize', this.updateWindowDimensions)
  }



  render() {
    return (
      <div className="App" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}} >
        <WindowInfo/>
        {/* {add another listener} */}
        {/* passing props that will be used in styling  */}
        {/* <Animation width={600} height={600}/> */}
        <Hover text="TEST"/>
        
      </div>
    );
  }
}

export default App;
