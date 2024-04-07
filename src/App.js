import './App.css';
import CompitationZone from './Components/CompitationZone';
import Conversation from './Components/Conversation';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import LatestNews from './Components/LatestNews';
import Mascot from './Components/Mascot';
import Medals from './Components/Medals';
import NationalGames from './Components/NationalGames';
import Partners from './Components/Partners';
import Schedule_container from './Components/Schedule_container';
import Social from './Components/Social';
import Sports from './Components/Sports';

function App() {
  return (
    <div className="app">
      <Header />
      <LatestNews />
      <Medals />
      <Schedule_container />
      <Mascot />
      <Conversation />
      <Sports />
      <Social />
      <CompitationZone />
      <Gallery />
      <Partners />
      <NationalGames />
      <Footer />
    </div>
  );
}

export default App;
