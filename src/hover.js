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

const styles = {
  container: {
    position: 'relative'
  },
  light: {
    color: '#2D4571',
    fontSize: '80px',
    position: 'absolute',
    left: 0,
    right: 0
  },
  dark: {
    color: '#7688A9',
    fontSize: '80px',
   
  },

}

export default Hover