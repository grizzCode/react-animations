import React, { Component } from "react";
export default class Animation extends Component {
  state = {
    xPos: 100,
    dx: 2
  };
  componentDidMount(){
    this.ticker = setInterval(()=>{
      this.nextStep()
    }, 40)
  }
  componentDidUpdate(prevProps, prevState){
    // if(prevState.xPos > 600- boxWidth){
      if(prevState.xPos > this.props.width - boxWidth){
      this.setState({
        dx: -2,
        xPos: this.props.width - boxWidth -1
        // xPos: 599
      })
    }
    if(prevState.xPos < 0 ){
      this.setState({
        dx: 2,
        xPos: 1
      })
    }
  }
  nextStep(){
    const { xPos, dx } = this.state 
    this.setState({
      xPos: xPos + dx
    })
  }
  render() {
    const { width, height } = this.props;
    const { xPos } = this.state;
    return (
      <div style={{ ...styles.container, width: width, height }}>
        {/* <div style={}></div> */}
      </div>
    );
  }
}
const boxWidth = 100
const styles = {
  container: {
    border: "1px solid",
    backgroundColor: "#f1f1f1",
    position: "relative"
  }
};