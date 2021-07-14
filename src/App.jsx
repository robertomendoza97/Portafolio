import React, {Fragment} from 'react';
import Header from './componentes/Header';
import About from './componentes/About';
import Proyects from './componentes/Proyects';
import Footer from './componentes/Footer';
import Contact from './componentes/Contact';


function App() {
  return(
    <Fragment>
      <Header/>
      <About/>
      <Proyects/>
      <Contact/>
      <Footer/>
    </Fragment>
  );
};

export default App;
