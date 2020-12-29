import React, {useState} from 'react';
import './container.css';

const Container = () => {

    const [shape, setShape] = useState('square')
    return (
        <div class="present">
    <div class="lid">
        <span></span>
    </div>
    <div class="content">
        <div class={shape} />
    </div>
    <div class="box">
        <span></span>
        <span></span>
    </div>
</div>
    )
}

export default Container;