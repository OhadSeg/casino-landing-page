import Header from './components/Header/Header';
import './App.css';
import GamesList from './components/GamesList/GamesList';
import LogoList from './components/LogoList/LogoList';
import MainHeader from './components/MainHeader/MainHeader';
import Instructions from './components/Instructions/Instructions';
import {paymentMethods, sponsors} from './data/sponsors'

function App() {
  return (
    <div>
      <Header />
      <div className='upper-part'>
      <MainHeader/>
      <hr className="solid"/>
      <GamesList />
      <Instructions/>
      </div>
      <LogoList logos = {paymentMethods} />
      <div>
      <LogoList logos = {sponsors} />

      </div>
  
      
    </div>
  );
}

export default App;
