import React, { Component } from 'react';

export const ShapeContext = createContext();

class ShapeContextProvider extends Component {
    state = {
        currentShape: square,
        square: square,
        star: star-five,
        diamond: diamond,
        triangle: triangle
    }
    toggleShapeSquare = () => {
        this.setState({currentShape: square})
    }
    toggleShapeStar = () => {
        this.setState({currentShape: star})
    }
    toggleShapeDiamond = () => {
        this.setState({currentShape: diamond})
    }
    toggleShapeTriangle = () => {
        this.setState({currentShape: triangle})
    }

    render() {
        return (
            <ShapeContext.Provider value={{...this.state, toggleShapeSquare: this.toggleShapeSquare, 
            toggleShapeStar: this.toggleShapeStar, toggleShapeDiamond: this.toggleShapeDiamond, toggleShapeTriangle: this.toggleShapeTriangle}}>
                {this.props.children}
            </ShapeContext.Provider>
        )
    }
}

export default ShapeContextProvider;