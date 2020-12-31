import React, { Component } from 'react';
import './controls.css';
import { ShapeContext } from '../../contexts/ShapeContext';


class Controls extends Component  {
    render(){
        return(
        <ShapeContext.Consumer>{(context) => {
            const {toggleShapeSquare, toggleShapeTriangle, toggleShapeDiamond, toggleShapeStar} = context;


            return(
            <div className="control-panel">
            <button  onClick={toggleShapeSquare} className="waves-effect waves-light btn">Square</button>
            <button  onClick={toggleShapeTriangle} className="waves-effect waves-light btn">Triangle</button>
            <button  onClick={toggleShapeDiamond} className="waves-effect waves-light btn">Diamond</button>
            <button  onClick={toggleShapeStar} className="waves-effect waves-light btn">Star</button>
        </div>
            );
        }}
         </ShapeContext.Consumer>
        )
        }}



export default Controls;