import React, {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [select, setSelect] = useState(null);

  return (
    <>
      <Header setSelect={setSelect}/>
      <Main select={select}/>
    </>
  );
}

export default App;