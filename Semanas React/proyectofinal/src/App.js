import logito from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './misc/Menu';
import Footer from './misc/Footer';
import CursoList from './curso/CursoList';
import GrupoList from './grupo/GrupoList';


function App() {

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     activeComponent: 'home'
    //   };

    // }



  // const { activeComponent, SetActiveComponent } = this.props;



  return (
    <div className="container-fluid">   
      <div className="container-fluid">   
        <Menu/>
      </div>
      <div className="container-fluid">           
        {/* { activeComponent === 'curso' && <CursoList/>}
        { activeComponent === 'grupo' && <GrupoList/>} */}
        <CursoList/>
        <GrupoList/>
      </div>      
      <div className="container-fluid">   
        <Footer/>
      </div>
    </div>  
  );
}

export default App;
