import "./App.css";
import { useState } from "react";
import DisplayToDo from "./Components/DisplayToDo";
import DisplayDone from "./Components/DisplayDone";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [doneList, setDone] = useState([]);

  const handleChange = (event) => {
    return setToDo(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toDo
      ? setToDoList((prev) => [...prev, toDo])
      : alert("Please Enter a Task");
  };

  return (
    <form>
      <header>
        <h2 className='header-toDo'>To Do App</h2>
        <input type="text" name="toDo" onChange={handleChange} />
        <br/>
        <button onClick={handleSubmit}>Submit</button>
      </header>

      <div className="big-container">
        
        <DisplayToDo
          doneList={doneList}
          setDone={setDone}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
        {/* <div className="container done"></div> */}
        <DisplayDone
          doneList={doneList}
          setDone={setDone}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
      </div>
    </form>
  );
}

export default App;