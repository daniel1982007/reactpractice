import React from 'react';

class Translator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      word: ''
    }
    //some eventhandle func
    this.handleChange = this.handleChange.bind(this)
  }

  //event handle func goes from here
  handleChange(ev) {
    let input = ev.target
    //you can't use loop for this, because, each time you press a key into input 
    //it loops through map obj, if first element check true, next element checks,
    //maybe it will be false
    this.setState({word: input.value})
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input 
              type="text" 
              className="text-input" 
              data-testid="text-input" 
              onChange={this.handleChange}
            />
          </div>

          <div className="input-container">
            <span>output:</span>
            <input 
              type="text" 
              className="text-output" 
              data-testid="text-output" 
              readOnly 
              value={this.props.translations.get(this.state.word) || ''} //map usage, obj.get(key)
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
