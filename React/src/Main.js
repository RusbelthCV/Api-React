import React from "react";
import 'bootstrap/dist/css/bootstrap';
const API = "http://localhost:3000";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.cupones
    };
  }
  /*componentDidMount() {
    const url = API + "/api/cupones";
    fetch(url)
      .then(data => data.json())
      .then(datajs => {
        if (datajs.ok) {
          this.setState({ data: datajs.data });
        }
      })
      .catch(err => console.log(err));
  }*/
  render() {
    if (this.state.data.length == 0) {
      return (
        <h3>Cargando Datos...</h3>
      );
    }
    let datos = this.state.data.map(el => <div className="rounded border col-3 mx-2 my-2" key={el.id}><p>{el.Nombre}</p> <img className="img-fluid" src={'http://localhost:3000/img/' + el.Foto + ".png"} /> <p>{el.Descripcion}</p></div>);
    return (
        <div className="row">
          {datos}
        </div>
    );
  }
}

export default Main;
