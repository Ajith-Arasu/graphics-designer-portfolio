import '../styles/styles.css'; // Include your main styles here
import '../styles/responsivestyles.css'; // Include your responsive styles here
import '../styles/ImageComparison.css'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
function MyApp({ Component, pageProps }) {
  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp;
