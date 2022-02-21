import './App.css';
import './services/firebase';
import Routes from './routes';
import GlobalStyle from './globalStyles';
import {UsuarioProvider} from './contexts/user'
import './services/firebase';

function App() {
  return (
    <UsuarioProvider>
      <GlobalStyle/>
      <Routes/>
    </UsuarioProvider> 
  );
}

export default App;
