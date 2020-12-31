import React from 'react';
import Container from './components/container/container';
import Controls from './components/controls/controls';
import Display from './components/display/display';
import ShapeContextProvider from './contexts/ShapeContext';


   const App = () => {
    return (
        <div>
            <ShapeContextProvider>
            <Display />
            <Container />
            <Controls />
            </ShapeContextProvider>
        </div>
    );
    };


export default App;