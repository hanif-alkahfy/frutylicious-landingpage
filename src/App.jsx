import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div>
      <Analytics />
      <Navbar />
      <HomeSection />
    </div>
  );
}

export default App;
