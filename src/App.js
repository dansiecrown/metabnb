import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Wallets from './components/Wallets';
import Inspire from './components/Inspire';
import Nfts from './components/Nfts';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Wallets />
      <Inspire />
      <Nfts />
      <Footer />
    </div>
  );
}

export default App;
