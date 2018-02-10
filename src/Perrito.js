import React, {Component} from 'react';

class Perrito extends Component {

    constructor(props) {
      super(props);
      this.state = {
        color: 'cafe'
      }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }

  componentWillMount() {
  }

  handleChangeTitle = () => {
    console.log("desde perrito");
    this.props.handleTitle('Desde perrito cambie el titulo');
  }

  render() {
    const text = `Hola soy ${this.props.name} y peso ${this.props.weight} y mi color es ${this.props.color}`;
    return (
      <div className="App">
        <button onClick={this.handleChangeTitle}>Cambio de titulo de gatito</button>
        {text}
      </div>
    );
  }

  componentDidMount() {
  }
}


export default Perrito;
