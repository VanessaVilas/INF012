import React, {Component} from 'react';

class Relogio extends Component{
    constructor(props){
        super(props);
        this.state={
            hora:new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({hora: new Date().toLocaleTimeString()});
        }, 1000)
    }

    render(){
        return(
            <div>
                Hora Atual <h1>{this.state.hora}</h1>
            </div>
        )
    }
}export default Relogio;