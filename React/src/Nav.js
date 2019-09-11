import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: '',
        };
        this.iniciandoBusqueda = this.iniciandoBusqueda.bind(this);
        this.enviar = this.enviar.bind(this);
    }
    enviar(e){
        e.preventDefault();
        this.props.enviar(this.state.busqueda);

        this.setState({
            busqueda: ''
        });
    }
    iniciandoBusqueda(e){
        let text = e.target.value
        this.setState({
            busqueda: text
        });
    }
    render() {
        return (
            <div className="row">
                <form onSubmit = {(e) => this.enviar(e)}>
                    <div className="form-group row">
                        <label htmlFor="busqueda" className="col-4 col-form-label">Busqueda:</label>
                        <div className="col-8">
                            <input className="form-control " id="busqueda" name="busqueda" type="text" value = {this.state.busqueda} onChange = {this.iniciandoBusqueda}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Nav;