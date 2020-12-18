import React from 'react'

class CoordinatesButton extends React.Component {

    handleClick = e => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return <button onClick={this.handleClick}>CordsYOooo</button>
    }
}

export default CoordinatesButton