import React from 'react';
import './App.css';
import Axios from 'axios';

class App extends React.Component {

  state = {
    rendering: false,
    url: '',
    message: ''
  }

  handleRequest = (e) => {
    e.preventDefault()

    Axios.get(this.state.url)
      .then(res => {
        const data = JSON.stringify(res.data)
        this.setState({message: data})
        console.log("Berhasil", res.data)
      })
      .catch(err => {
        console.log("Gagal")
        this.setState({message: err.toString()})
      })
  }

  render() {
    return (
      <div className="App">
        <p>CHECK YOUR CORS</p>
        <form>
          <label>GET:</label>
          <input type="text" onChange={(e) => {this.setState({url: e.target.value})}} style={{width: 200}} placeholder="http://localhost:3001/products" />
          <button onClick={(e) => this.handleRequest(e)}>CHECK</button>
        </form>
       <div>{this.state.message}</div>
      </div>
    );
  }

  
}

export default App;
