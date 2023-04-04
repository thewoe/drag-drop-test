import { useState } from 'react';
import { Draggable, Droppable } from './DragAndDrop';
import './Page.scss';

const App = () => {
  const onSave = () => console.log(Array.from(document.getElementById('droppable').querySelectorAll('*')).map(child => child.id));
  return (
    <div className="card fullWidth">
      <form>
        <main className="mylinks">
          <div className="paneProposals">
            <h3>Proposed members</h3>
            <Droppable id='droppable' />
          </div>
          <div className=" paneProposals paneSearch">
            <h3>Search</h3>
            <div className="formEntry">
              <input />
            </div>
            <Droppable id='choices'>
              <div className="draggableItems">
                <Draggable id="01" droppableRegion='droppable'>The Magicians</Draggable>
                <Draggable id="02" droppableRegion='droppable'>The Bargaineers</Draggable>
                <Draggable id="03" droppableRegion='droppable'>The Hikers</Draggable>
                <Draggable id="04" droppableRegion='droppable'>The Dreamers</Draggable>
                <Draggable id="05" droppableRegion='droppable'>The Coders</Draggable>
                <Draggable id="06" droppableRegion='droppable'>The Scarers</Draggable>
                <Draggable id="07" droppableRegion='droppable'>The Skeletons</Draggable>
                <Draggable id="08" droppableRegion='droppable'>The Hobbits</Draggable>
                <Draggable id="09" droppableRegion='droppable'>The Clowns</Draggable>
                <Draggable id="10" droppableRegion='droppable'>The Painters</Draggable>
              </div>
            </Droppable>
          </div>
        </main>
      </form>
      <button onClick={onSave}>Save</button>
    </div>
  );
}

export default App;