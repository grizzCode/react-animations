import React from 'react'

class Hover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='titleContainer' style={{...styles.container}}>
        <div style={{ ...styles.light }}>
          <h1>{this.props.text}</h1>
        </div>
        <div style={{ ...styles.dark }}>
          <h1>{this.props.text}</h1>
        </div>
      </div>
    )
  }


}

let xPos = 0;
let yPos = 60;

const styles = {
  container: {
    position: 'relative'
  },
  light: //cloneWrapper
   {
    color: '#2D4571',
    fontSize: '90px',
    position: 'absolute',
    left: 0,
    right: 0,
    clipPath: `polygon(0 0, ${xPos}% 100%, ${yPos}% 100%)`

  },
  dark: //titleWrapper
  {
    color: '#7688A9',
    fontSize: '90px',
   
  },

}

export default Hover