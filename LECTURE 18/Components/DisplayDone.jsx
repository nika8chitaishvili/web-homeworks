import React from "react";
import Done from "./Done";

const DisplayDone = ({ doneList, setDone, setToDoList }) => {
  return (
    <div className="container">
      <ul className='container-list'>
        <div >
            <h2 className='container-header'>Done:</h2>
        </div>
        {doneList.map((item, i) => {
          return (
            <Done
              doneList={doneList}
              setDone={setDone}
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

export default DisplayDone;