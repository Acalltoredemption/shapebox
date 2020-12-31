import React, {Component} from 'react';
import { ShapeContext } from '../../contexts/ShapeContext';


class colorControls extends Component {
    render() {
        return(
        <ShapeContext.Consumer>{(context) => {
            const {toggleColorRed, toggleColorBlue, toggleColorGreen, toggleColorYellow} = context;
            return (
                <ul>
                    <li>
                <button onClick={toggleColorRed} className="waves-effect waves-light btn">Red</button>
                 </li>
                 <li>
                 <button onClick={toggleColorBlue} className="waves-effect waves-light btn">Blue</button>
                 </li>
                 <li>
                 <button onClick={toggleColorGreen} className="waves-effect waves-light btn">Green</button>
                 </li>
                 <li>
                 <button onClick={toggleColorYellow}className="waves-effect waves-light btn">Yellow</button>
                 </li>
                </ul>
            )
        }}
        </ShapeContext.Consumer>
        );
    }
}

export default colorControls;
