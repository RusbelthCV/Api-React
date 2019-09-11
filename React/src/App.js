import React from 'react';
import Main from './Main';
import Nav from './Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cupones: []
    };
    this.dataCupones = this.dataCupones.bind(this);
  }
  dataCupones(data) {
    const API = "http://localhost:3000";
    const url = API + "/api/cupones/"+data;
    console.log(url);
    fetch(url)
      .then(data => data.json())
      .then(datajs => {
        if (datajs.ok) {
          this.setState({ cupones: datajs.data });
        }
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="container mt-2">
        <Nav enviar={this.dataCupones} />
        <Main cupones={this.state.cupones} />
      </div>
    );
  }
}

export default App;