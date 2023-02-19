import "../styles/globals.css"

// INTERNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex"
// can import both from same index (which locates the file for us)
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext"

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NFTMarketplaceProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketplaceProvider>
  </div>
  // <NFTMarketplaceProvider> acts as a wrapper, making the Context available in the entire application
)

export default MyApp
