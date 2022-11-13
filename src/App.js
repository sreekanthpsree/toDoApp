import React, { useState } from "react";
import "./App.css";

function App() {
  const uuid = require("uuid");
  const [toDos, setToDos] = useState([]);
  const [todo, setTodo] = useState("");
  const [active, setActive] = useState(false);
  const crossLine = () => {
    setActive(!active);
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>

      <div className="input">
        <input
          id="textfield"
          value={todo}
          type="text"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="🖊️ Add item..."
        />
        <i
          className="fas fa-plus"
          onClick={() => {
            setToDos([
              ...toDos,
              {
                id: uuid.v4(),
                text: todo,
                status: false,
                date: Date().toString().slice(4, 21),
              },
            ]);
            setTodo("");
          }}
        ></i>
      </div>
      {toDos.map((obj, i) => {
        return (
          <div key={i}>
            {!obj.status && (
              <div className="todos">
                <div className="todo">
                  <div className="left">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        setActive(true);
                        console.log(active);
                        setToDos(
                          toDos.filter((obj2, i) => {
                            if (obj2.id === obj.id) {
                              obj2.status = e.target.checked;
                            }

                            return obj2;
                          })
                        );
                      }}
                      value={obj.status}
                    />
                    <p>{obj.text}</p>
                    <div className="date">
                      <p>{obj.date}</p>
                    </div>
                  </div>

                  <div className="right">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <br />
      {<h1>Finished task</h1>}
      {toDos.map((obj, i) => {
        if (obj.status) {
          return (
            <div key={i} className={`todos +${active ? " new" : ""}`}>
              <div className="todo">
                <p>{obj.text}</p>
                <div className="date">
                  <p>{obj.date}</p>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default App;
