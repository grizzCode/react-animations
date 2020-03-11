import React from 'react'

class Hover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
  }

  movement = (e) => {
    //get width of div that holds decorated text
    const width = this.refs.titleContainer.clientWidth
    const height = this.refs.titleContainer.clientHeight
    //store x and y offset variables from mouse movements
    const offX = Math.floor((e.nativeEvent.offsetX / width) * 100)
    const offY = Math.floor((e.nativeEvent.offsetY / height) * 100)
    // console.log(offX, offY)
    this.setState({
      x: offX,
      y: offY
    })
  }

  render() {
    const { x, y } = this.state
    const styles = {
      container: {
        position: 'relative'
      },
      light: {
        color: '#2D4571',
        fontSize: '90px',
        position: 'absolute',
        left: 0,
        right: 0,
        clipPath: `polygon(0 0, ${x}% 0%, ${y}% 100%, 0% 100%)`,
        transition: 'all 0.8s cubic-bezier(0.165,0.84,0.44,1'
      },
      dark: {
        color: '#7688A9',
        fontSize: '90px'
      },
    }
    
    return (
      <div ref='titleContainer'
        style={{ ...styles.container }}
        onMouseMove={this.movement}>
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

export default Hover