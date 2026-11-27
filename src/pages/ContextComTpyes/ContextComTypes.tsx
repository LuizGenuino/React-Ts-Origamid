import React from "react";
import { useUi } from "./contexts/Uicontext";
import { useUser } from "./contexts/USerContext";

const ContextComTypes = () => {
    const {setDark} = useUi()
      const { data } = useUser();

  return (
    <div>
        <div>
            <h3>Preferencias da {data?.nome}</h3>
            <p>Qualidade: {data?.preferencias.qualidade}</p>
            <p>Playback: {data?.preferencias.playback}</p>
            <p>Volume: {data?.preferencias.volume}</p>
        </div>
      <h1>ContextComTypes</h1>
      <button onClick={() => setDark(v => !v)} >Muda no Header</button>
    </div>
  );
};

export default ContextComTypes;
