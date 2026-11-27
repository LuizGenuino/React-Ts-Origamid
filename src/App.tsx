import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { DataContextProvider } from "./contexts/DataContext";
import Resumo from "./pages/Resumo";

function App() {
  return (
    <>
      <DataContextProvider>
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </DataContextProvider>
    </>
  );
}

export default App;
