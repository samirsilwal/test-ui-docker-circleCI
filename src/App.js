import React from 'react';
import axios from 'axios';

class App extends React.Component  {

  constructor() {
    super();
    this.state = {
      value: '',
      hello:''
    }

  }

  handleOnChange = (e) => {
    this.setState({
      value:e.target.value
    })
  }

  handleOnSubmit = () =>  {
    axios.get('http://localhost:9091/hello/'+this.state.value).then((val) => {
      this.setState({
        hello: val.data.hello
      })
    })
  }
  
  render() {
    return (
      <div>
        hello world

        enter the country 
        <input type="text" onChange={this.handleOnChange}></input>
        <button onClick={this.handleOnSubmit}>   say hello</button>

        <h1> {this.state.hello}</h1>
      </div>
    );
  }
  
}

export default App;
