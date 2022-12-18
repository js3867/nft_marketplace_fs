import "../styles/globals.css"

// INTERNAL IMPORT
import { NavBar } from "../components/componentsindex"

const App = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
  </div>
)

export default App
