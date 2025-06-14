import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Menu from './components/Menu';
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
      
    </div>
  );
}

export default App;
