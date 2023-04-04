
export function Draggable({ id, children }) {
  // Methods -------------------------------------
  const handleDrag = event => event.dataTransfer.setData('text', event.target.id);

  // View ----------------------------------------
  return (
    <div
      key={id}
      id={id}
      draggable='true'
      onDragStart={handleDrag}
      className='name'
    >
      {children}
    </div>
  );
};

export function Droppable({ id, children }) {
  // Methods -------------------------------------
  const handleDrop = event => {
    event.preventDefault();
    const draggable = document.getElementById(event.dataTransfer.getData('text'));
    const droppable = document.getElementById(id);
    if (droppable.contains(draggable)) return;
    droppable.appendChild(draggable);
  };

  const allowDrop = event => event.preventDefault();
  
  // View ----------------------------------------
  return (
    <div
      id={id}
      onDrop={handleDrop}
      onDragOver={allowDrop}
      className='droppableRegion'
    >
      {children}
    </div>
  );
};