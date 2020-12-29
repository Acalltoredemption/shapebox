import React from 'react';
import Container from './components/container/container';
import Controls from './components/controls/controls';
import Display from './components/display/display';



   const App = () => {
    return (
        <div>
            <Display />
            <Container />
            <Controls />
        </div>
    );
    };


export default App;