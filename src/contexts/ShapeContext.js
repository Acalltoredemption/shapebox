import React, { createContext, Component } from 'react';

export const ShapeContext = createContext();

class ShapeContextProvider extends Component {
    state = {
        currentShape: 'square',
        currentColor: 'redd',
    }
    toggleShapeSquare = () => {
        this.setState({currentShape: 'square'})
    }
    toggleShapeStar = () => {
        this.setState({currentShape: 'star-five'})
    }
    toggleShapeDiamond = () => {
        this.setState({currentShape: 'diamond'})
    }
    toggleShapeTriangle = () => {
        this.setState({currentShape: 'triangle'})
    }




    toggleColorRed = () => {
        this.setState({currentColor: 'redd'})
    }
    toggleColorBlue = () => {
        this.setState({currentColor: 'bluee'})
    }
    toggleColorGreen = () => {
        this.setState({currentColor: 'greenn'})
    }
    toggleColorYellow = () => {
        this.setState({currentColor: 'yelloww'})
    }






    render() {
        return (
            <ShapeContext.Provider value={{...this.state, toggleShapeSquare: this.toggleShapeSquare, 
            toggleShapeStar: this.toggleShapeStar, toggleShapeDiamond: this.toggleShapeDiamond, toggleShapeTriangle: this.toggleShapeTriangle, toggleColorRed: this.toggleColorRed, 
            toggleColorBlue: this.toggleColorBlue, toggleColorGreen: this.toggleColorGreen, toggleColorYellow: this.toggleColorYellow}}>
                {this.props.children}
            </ShapeContext.Provider>
        )
    }
}

export default ShapeContextProvider;