import { StrictMode } from "react"
import {createRoot} from "react-dom/client"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

const App = () => {}

function App(){

}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);