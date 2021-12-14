import { Component } from "react";

class Counter extends Component {

    constructor() {
        super()
        this.state = { value: 0 }
    }

    componentDidMount = () => console.log('EL COMPONENTE YA SE HA MONTADO COMPLETAMENTE')
    componentDidUpdate = () => console.log('EL COMPONENTE SE HA ACTUALIZADO')

    incrementCounter = () => this.setState({ value: this.state.value + 1 })

    render() {

        console.log('EL COMPONENTE SE HA RENDERIZADO')

        return (
            <>
                <h1>Contador con valor {this.state.value}</h1>
                <button onClick={this.incrementCounter}>Aumentar</button>
            </>
        )
    }
}

export default Counter