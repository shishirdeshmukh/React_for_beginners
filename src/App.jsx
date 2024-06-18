import Greet from "./Components/Propss";
import State from "./Components/State";
import "./App.css";
import Events from "./Components/Events";
import { ParentComp } from "./Components/ParentComponent";
import Parent from "./demo/Parent";
import ConditionalRenderinf from "./Components/ConditionalRenderinf";
import DisplayList from "./Components/DisplayList";
import Forms from "./Components/Forms";
import Method from "./Components/MethodGET";
import MethodPOST from "./Components/MethodPOST";
import NAMES from "./Components/data.json";
import { useState, useTransition } from "react";

function App() {
  const [query, setQuery] = useState("");

  const [inputvalue, setInputvalue] = useState("");
  const [isPending, startTransition] = useTransition();
  const changehandler = (e) => {
    setInputvalue(e.target.value);
    startTransition(() => setQuery(e.target.value));
  };

  const filteredNames = NAMES.filter((e) => {
    return e.first_name.includes(query) || e.last_name.includes(query);
  });

  return (
    <div className="App">
      <input
        type="text"
        value={inputvalue}
        onChange={changehandler}
        placeholder="enter your search"
      />

      {isPending && <p>Updating List</p>}

      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  );
}

export default App;
