import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Router";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
