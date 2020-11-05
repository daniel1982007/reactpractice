import React from 'react';

class TextEditor extends React.Component {
  constructor() {
    super()
    this.state = {
      input_word: '',
      contentString: '',
      
    }
    this.handleAppendClick = this.handleAppendClick.bind(this)
    //this.handleChange = this.handleChange.bind(this)
    this.removeLast = this.removeLast.bind(this)
  }

  handleAppendClick() {
    this.setState({
      input_word: '',
      contentString: this.state.contentString.concat(' ' + this.state.input_word),  
    })
    //this.setState({input_word: ''})
  }

  removeLast() {
    //delete last word from contentString, find last ' ' and slice the contentString
    let index = this.state.contentString.lastIndexOf(' ')
    const resultString = this.state.contentString.slice(0, index)
    this.setState({contentString: resultString})

  }
  

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input 
            className="word-input" 
            type="text" 
            data-testid="word-input" 
            onChange={(e) => this.setState({input_word: e.target.value})}
            value={this.state.input_word}
            
          />
          <button data-testid="append-button" onClick={this.handleAppendClick}>
            Append
          </button>
          <button data-testid="undo-button" onClick={this.removeLast}>
            Undo
          </button>
        </div>
        <div className="text-field" data-testid="text-field">{this.state.contentString}</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
