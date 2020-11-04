import logo from './logo.svg';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Header from './componenets/header';
import RouterConfig from './Routes/Routerconfig';
import HeaderForm from './componenets/header-form';

function App() {
  return (
    <div className="App">
      <HashRouter>
      {/* <Header/>
      <RouterConfig/> */}
      <HeaderForm/>
      <RouterConfig/>
      </HashRouter>
      
    </div>
  );
}

export default App;
