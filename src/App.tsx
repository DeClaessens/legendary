/* eslint-disable no-unused-vars */
import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Playground from './components/Playground';

const App = state => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Playground />
      </DndProvider>
    </div>
  );
};

export default App;
