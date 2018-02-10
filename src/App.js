import React, { Component } from 'react';
import logo from './logo.svg';
import Perrito from './Perrito';
import Gatito from './Gatito';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.state = {
      color: 'Cafe',
      title: 'Hola soy un gatito',
      loading: true,
      message: 'Ya acabe',
      animes: []
    }
  }

  componentWillMount() {
      console.log('Se va a renderizar el componente');

      console.log('Haciendo la peticiob');
      axios
          .get('https://kitsu.io/api/edge/anime-productions')
          .then(response => {
              console.log(response);
              this.setState({animes: response.data.data});
              console.log('acabee sin errores');
          })
          .catch(error => {
            console.log(error);
            console.log('ocurrio un error');
          });
  }

  handleChangeColor = () => {
    this.setState({color: 'Negro'});
  }

  handleChangeTitle = text => {
    this.setState({title: text});
  }

  render() {
    console.log('En render');
    console.log(this.state.color);
    console.log(this.state.animes);
    let animes = '';
    if(this.state.animes.length > 0) {
      console.log('Esta lleno');
      console.log(this.state.animes);
        animes = this.state.animes.map((anime, idx) => {

            return <div key={idx}>{anime.id}</div>
        })
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleChangeColor}>Cambio de color</button>
          <h1 className="App-title">Welcome to React</h1>

          <Perrito name="Ricardo" weight="80 kgs" color={this.state.color} handleTitle={this.handleChangeTitle}/>
        </header>

        <Gatito title={this.state.title}/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {animes}
      </div>
    );
  }

  componentDidMount() {
      console.log('Ya aCABE');
  }
}

export default App;
