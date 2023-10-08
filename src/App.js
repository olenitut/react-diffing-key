// the key prop tells the diffing algorithm that a certain element is unique
// use for lists and state resetting

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./Form";

function App() {
  const [active, setActive] = useState(1);
  const [isHidden, setIsHidden] = useState(false);
  const [folders, setFolders] = useState([1, 2, 3]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Diffing and Key</p>
      </header>
      <main className="main">
        <div className="list">
          {folders.map((el) => (
            <div
              className={`tab ${active === el && "active"}`}
              onClick={() => setActive(el)}
              // key={el}
            >
              Folder {el}
            </div>
          ))}
        </div>
        {!isHidden && (
          <div>
            <Form active={active} />
            {/* <Form active={active} key={active} /> */}
            <div>
              <button
                type="button"
                className="btn"
                onClick={() => setIsHidden(true)}
              >
                Hide Form
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  const newFolders = folders.filter((el) => el !== active);
                  setFolders(newFolders);
                  setActive(newFolders[0]);
                }}
              >
                Delete this folder
              </button>
            </div>
          </div>
        )}
        {isHidden && (
          <button className="btn" onClick={() => setIsHidden(false)}>
            Show Form
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
