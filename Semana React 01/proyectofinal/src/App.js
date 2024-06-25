import loguito from './logo.svg';
import Menu from './misc/Menu';
import Footer from './misc/Footer';

import CursoList from './curso/CursoList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div
        className="container"
      >
        <Menu/>
      </div>
      <div
        className="container"
      >
        <CursoList/>
      </div>      
      <div
        className="container"
      >
        <Footer/>
      </div>




    </div>
  );
}

export default App;
