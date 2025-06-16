import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import ReactGA from "react-ga4";

ReactGA.initialize("G-PFLJXTPS63");
ReactGA.send("pageview");

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Menu />
      <Banner />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
