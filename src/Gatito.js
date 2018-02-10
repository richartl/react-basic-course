import React, {Component} from 'react';

class Gatito extends Component {

    constructor(props) {
      super(props);
      this.state = {
        color: 'cafe'
      }
    }

  componentWillMount() {
  }

  render() {
    return (
      <div className="App">
        {this.props.title}
      </div>
    );
  }

  componentDidMount() {
  }
}


export default Gatito;
