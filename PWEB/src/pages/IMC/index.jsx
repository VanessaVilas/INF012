import {Component} from 'react';

class IMC extends Component{
    constructor(props){
        super(props);
        this.state = {
            peso: 0,
            altura: 0,
            imc: "Digite seu Peso e Altura para saber o seu IMC"
        }
    }

    calcular(){
        let state = this.state;
        let imc = state.peso / (state.altura ** 2);
        state.imc=imc;
        this.setState(state);
    }

    render(){
        return(
            <div>
                Peso: <input type="text" name="peso" value={this.state.peso} onChange={(ev) => this.setState({peso: ev.target.value})}/>
                Altura: <input type="text" name="altura" value={this.state.altura} onChange={(ev) => this.setState({altura: ev.target.value})}/>

                <button onClick={this.calcular.bind(this)}>Calcular</button>
                <br/>
                <h1>{this.state.imc}</h1>
            </div>
        )
    }
}export default IMC;