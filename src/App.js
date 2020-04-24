import React from 'react';
import './App.css';
import Axios from 'axios';

class App extends React.Component {

  state = {
    rendering: false,
    url: ''
  }

  handleRequest = (e) => {
    e.preventDefault()

    Axios.get(this.state.url)
      .then(res => {
        this.renderRes(res.data.toString())
        console.log("Berhasil")
      })
      .catch(err => {
        this.renderRes(err)
        console.log("Gagal")
      })
  }

  renderRes = (data) => (
    <p> {data || ""} </p>
  )

  render() {
    return (
      <div className="App">
        <p>CHECK YOUR CORS</p>
        <form>
          <label>GET:</label>
          <input type="text" onChange={(e) => {this.setState({url: e.target.value})}} style={{width: 200}} placeholder="http://localhost:3001/products" />
          <button onClick={(e) => this.handleRequest(e)}>CHECK</button>
        </form>
        {this.renderRes()}
      </div>
    );
  }

  
}

export default App;
