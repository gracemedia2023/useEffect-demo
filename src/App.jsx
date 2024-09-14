import { useState, useEffect } from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  //console.log("render from App");
  const [displayPerson, setDisplayPerson] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setDisplayPerson(!displayPerson);
        }}
      >
        Toggle
      </button>
      <hr />

      {displayPerson && <Person />}
    </>
  );
}

export default App;
