import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import FeaturesSection from './components/Features';
import ReactGA from "react-ga4";

ReactGA.initialize("G-PFLJXTPS63");
ReactGA.send("pageview");

function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <FeaturesSection />

    </div>
  );
}

export default App;
