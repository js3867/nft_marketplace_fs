import "../styles/globals.css"

// INTERNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex"
// can import both from same index (which locates the file for us)

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
)

export default MyApp
