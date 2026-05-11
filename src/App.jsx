import HeaderAlert from './components/HeaderAlert';
import Feature from './components/Feature';
import AgencyBehind from './components/AgencyBehind';
import Intro from './components/Intro';
import FeaturedWork from './components/FeaturedWork';
import Service from './components/Service';
import NewThings from './components/NewThings';
import Legacy from './components/Legacy';
import Footer from './components/Footer';
import Promise from './components/Promise';
import Ready from './components/Ready';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <HeaderAlert />
      <Feature />
      <AgencyBehind />
      <Intro/>
      <FeaturedWork />
      <Service />
      <Promise />
      <Legacy />
      <NewThings />
      <Ready />
      <Footer />
      <br />
    </div>
  );
}
