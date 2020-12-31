import React, {Component} from 'react';
import './container.css';
import { ShapeContext } from '../../contexts/ShapeContext';

class Container extends Component {
    static contextType = ShapeContext;
render() {
    const {currentShape} = this.context;
    return (
        <div className="present">
    <div className="lid">
        <span></span>
    </div>
    <div className="content">
        <div className={currentShape} />
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