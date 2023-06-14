import Navbaar from './components/Navbaar';
import './App.css';
import Firstintro from './components/Firstintro';
import Second from './components/Second';
import Third from './components/Third';
import Sixth from './components/Sixth';
import Fourth from './components/Fourth';
import Extras from './components/Extras';

function App() {
  // function intro(){
  //   setTimeout()
  // }
  return (
    <>
    {/* <div id="preload"></div> */}
    <Navbaar />
    <Firstintro />
    <Second />
    <Third />
    <Fourth />
    <Extras />
    <Sixth />
    </>
  );
}

export default App;
