import React from "react";

const Done = ({ doneList, setDone, setToDoList, item, index }) => {
  const handleUndo = (e) => {
    e.preventDefault();
    setToDoList((prev) => [...prev, item]);
    setDone(doneList.filter((el) => el !== item));
  };

  const handleDeleteDone = (e) => {
    e.preventDefault();
    setDone(doneList.filter((el) => el !== item));
  };

  return (
    <li className="within-containers" key={index}>
      
      <div className='display'>
        <h4 className='display'>{item}</h4>
        <button onClick={handleUndo}>Undo</button>
        <button className='button-delete' onClick={handleDeleteDone}>Delete</button>
      </div>
    </li>
  );
};
export default Done;