import React, {Component} from 'react';
import './container.css';
import { ShapeContext } from '../../contexts/ShapeContext';




class Container extends Component {
    static contextType = ShapeContext;

render() {
    const {currentShape, currentColor} = this.context;
    
    return (
        <div className="present">
    <div className="lid">
        <span></span>
    </div>
    <div className="content">
        <div className={`${currentShape} ${currentColor}`} />
    </div>
    <div className="box">
        <span></span>
        <span></span>
    </div>
</div>
    )
}
}

export default Container;