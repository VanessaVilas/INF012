import React, {Component} from 'react';

class Contador extends Component{
    constructor(props){
        super(props);
        this.state={
            contador: 0
        }
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state =  this.state;
        state.contador++;
        this.setState(state);
    }

    diminuir(){
        let state =  this.state;
        state.contador--;
        this.setState(state);
    }

    render(){
        return(
            <div>
                <h1>Contador</h1>
                <h2>
                    <button onClick={() => this.aumentar()}>AUMENTAR</button>
                    <h1>{this.state.contador}</h1>
                    <button onClick={this.diminuir}>DIMINUIR</button>
                </h2>
            </div>
        )
    }
}export default Contador;