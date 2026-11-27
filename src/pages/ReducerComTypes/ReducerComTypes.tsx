import React from "react";
import Input from "./components/Input";

type State = {
  nome: string;
  email: string;
};

// tipo generico
// type Action = {
//   type: "setNome" | "setEmail";
//   payload: string | number | boolean;
// };

// type mais resistente a falhas
type Action =
  | {
      type: "setNome";
      payload: string;
    }
  | {
      type: "setEmail";
      payload: string;
    }
  | {
      type: "setIdade";
      payload: number;
    }
  | {
      type: "setAtivo";
      payload: boolean;
    };

// state: valor atual da variavel state
// action: qualquer valor que eu passar na função dispatch. Ex: numero, string, objeto ou array
function reducer(state: State, action: Action) {
  //   if (action.type === "setNome") {
  //     return { ...state, nome: action.payload };
  //   }
  //   if (action.type === "setEmail") {
  //     return { ...state, email: action.payload };
  //   }
  // return state;

  switch (action.type) {
    case "setNome":
      return { ...state, nome: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

const ReducerComTypes = () => {
  const [state, dispatch] = React.useReducer(reducer, { nome: "", email: "" });

  return (
    <div>
      <h1>Reducer Com Types</h1>
      <div>
        <Input
          id="nome"
          label="Nome"
          value={state.nome}
          onChange={({ target }) =>
            dispatch({ type: "setNome", payload: target.value })
          }
        />
        <Input
          id="email"
          label="Email"
          value={state.email}
          onChange={({ target }) =>
            dispatch({ type: "setEmail", payload: target.value })
          }
        />
      </div>
    </div>
  );
};

export default ReducerComTypes;
