import React, { createContext, Component } from 'react';

export const ColorContext = createContext();

class ColorContextProvider extends Component {
    state = {
        currentColor: 'red',
    }
    toggleColorRed = () => {
        this.setState({currentColor: 'red'})
    }
    toggleColorBlue = () => {
        this.setState({currentColor: 'blue'})
    }
    toggleColorGreen = () => {
        this.setState({currentColor: 'green'})
    }
    toggleColorYellow = () => {
        this.setState({currentColor: 'yellow'})
    }

    render() {
        return (
            <ColorContext.Provider value={{...this.state, toggleColorRed: this.toggleColorRed, 
            toggleColorBlue: this.toggleColorBlue, toggleColorGreen: this.toggleColorGreen, toggleColorYellow: this.toggleColorYellow}}>
                {this.props.children}
            </ColorContext.Provider>
        )
    }
}

export default ColorContextProvider;