import Header from "./pages/ContextComTpyes/components/Header";
import ContextComTypes from "./pages/ContextComTpyes/ContextComTypes";
import { UiContextProvider } from "./pages/ContextComTpyes/contexts/Uicontext";
import { UserContextProvider } from "./pages/ContextComTpyes/contexts/USerContext";
import HooksComTypes from "./pages/HooksComTypes/HooksComTypes";
import PropsComTypes from "./pages/PropsComTypes/PropsComTypes";

function App() {
  return (
    <>
      <PropsComTypes />
      <br />
      <br />
      <br />
      <HooksComTypes />
      <br />
      <br />
      <br />
      <UiContextProvider>
        <UserContextProvider>
          <Header />
          <ContextComTypes />
        </UserContextProvider>
      </UiContextProvider>
    </>
  );
}

export default App;
