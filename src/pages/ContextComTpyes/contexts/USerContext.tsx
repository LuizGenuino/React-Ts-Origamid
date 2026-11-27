import React from "react";
import useFetch from "../hooks/useFetch";

type User = {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: "baixa" | "media" | "alta";
  };
};

type IUserContext = {
  data: null | User;
  error: null | string;
  loading: boolean;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, error, loading } = useFetch<User>(
    "https://data.origamid.dev/usuarios/1",
  );

  return (
    <UserContext.Provider value={{ data, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);

  if (context === null) {
    throw new Error("useContext deve estar dentro do Provider");
  }

  return context;
};
