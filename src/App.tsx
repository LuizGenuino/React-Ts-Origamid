import Header from "./pages/ContextComTpyes/components/Header";
import ContextComTypes from "./pages/ContextComTpyes/ContextComTypes";
import { UiContextProvider } from "./pages/ContextComTpyes/contexts/Uicontext";
import HooksComTypes from "./pages/HooksComTypes/HooksComTypes";
import PropsComTypes from "./pages/PropsComTypes/PropsComTypes";


function App() {

  return (
    <>
    <PropsComTypes />
    <br /><br /><br />
    <HooksComTypes />
    <br /><br /><br />
    <UiContextProvider>
        <Header />
        <ContextComTypes />
    </UiContextProvider>
    </>
  );
}

export default App;
