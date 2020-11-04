import React from 'react';

class CycleCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  //handle click function, increment by 1
  handleClick() {
    if(this.state.count < this.props.cycle) {
      if(this.state.count === this.props.cycle -1) {
        this.setState({count: 0})
        return //it breaks if statement
      }
      this.setState({count: this.state.count + 1}) // setState: pass renewed obj to it
    }
  }


  render() {
    return (
      <button
        data-testid="cycle-counter"
        style={{ fontSize: '1rem', width: 120, height: 30, }}
        onClick={this.handleClick}
      >
      {this.state.count}
      </button>
    );
  }
}

export default CycleCounter;
