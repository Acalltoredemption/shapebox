import React from 'react';
import Container from './components/container/container';
import Controls from './components/controls/controls';
import Display from './components/display/display';
import ColorControls from './components/controls/colorControls';


import ShapeContextProvider from './contexts/ShapeContext';
import ColorContextProvider from './contexts/ColorContext';

   const App = () => {
    return (
        <div>
            <ColorContextProvider>
            <ShapeContextProvider>
            <Display />
            <ColorControls />
            <Container />
            <Controls />
            </ShapeContextProvider>
            </ColorContextProvider>
        </div>
    );
    };


export default App;