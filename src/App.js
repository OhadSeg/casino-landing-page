import Header from './components/Header/Header';
import Middle from './components/Middle/Middle';
import './App.css';
import LogoList from './components/LogoList/LogoList';
import {paymentMethods, sponsors} from './data/sponsors'
import Bottom from './components/Bottom/Bottom';


function App() {
  return (
    <div>
      <Header />
      <Middle/>
      <Bottom/>
      {/* <LogoList logos = {paymentMethods} />
      <LogoList logos = {sponsors} /> */}

    </div>
  );
}

export default App;
