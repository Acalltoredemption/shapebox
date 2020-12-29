import React from 'react';
import './controls.css';

const Controls = () => {
    return (
        <div className="control-panel">
            <a class="waves-effect waves-light btn">Square</a>
            <a class="waves-effect waves-light btn">Triangle</a>
            <a class="waves-effect waves-light btn">Diamond</a>
            <a class="waves-effect waves-light btn">Star</a>
        </div>
    )
}

export default Controls;