import React from "react";
import { useUi } from "./contexts/Uicontext";

const ContextComTypes = () => {
    const {setDark} = useUi()
  return (
    <div>
      <h1>ContextComTypes</h1>
      <button onClick={() => setDark(v => !v)} >Muda no Header</button>
    </div>
  );
};

export default ContextComTypes;
