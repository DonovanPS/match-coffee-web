import './App.css';
import { Myheader } from './componentes/Myheader';
import { Myfooter } from './componentes/Myfooter';
import { Mybanner } from './componentes/Mybanner';
import { Myreviews } from './componentes/Myreviews';
import { Mycontacto } from './componentes/Mycontacto';
import { Mypasos } from './componentes/Mypasos';
import { Mydescargapp } from './componentes/Mydescargapp';
import { Element } from 'react-scroll';




function App() {
  return (
    <div className="App">
      <Myheader></Myheader>



      <Element name="section1" className="element">
        <div id="section1">
          <Mybanner></Mybanner>
        </div>
      </Element>
      <Element name="section2" className="element">
        <div id="section2">
          <Mypasos></Mypasos>
        </div>
      </Element>
      <Element name="section3" className="element">
        <div id="section3">
          <Mydescargapp></Mydescargapp>
        </div>
      </Element>
      <Myreviews></Myreviews>
      <Element name="section4" className="element">
        <div id="section4">
          <Mycontacto></Mycontacto>
        </div>
      </Element>
      <Myfooter></Myfooter>
    </div>
  );
}

export default App;
