import React from "react";
import ToDo from "./ToDo";

const DisplayToDo = ({ setDone, toDoList, setToDoList }) => {
  return (
    <div className="container">
      <ul className="container-list">
        <div>
            <h2  className='container-header'>To Do List:</h2>
        </div>
        {toDoList.map((item, i) => {
          return (
            <ToDo className='display'
              setDone={setDone}
              toDoList={toDoList}
              setToDoList={setToDoList}
              item={item}
              index={i}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayToDo;