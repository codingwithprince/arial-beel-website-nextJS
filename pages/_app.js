import Layout from '../components/layouts'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Navbar.css';
import '../styles/Hero.css';
import '../styles/responsive.css';
import '../styles/Seasons.css';
import '../styles/ImageGallary.css';
import '../styles/Location.css';
import '../styles/About.css';
import '../styles/Guide.css';
import '../styles/Footer.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
