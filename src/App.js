import './App.css';
import './services/firebase';
import Route from './routes';
import GlobalStyle from './globalStyles';
import {UsuarioProvider} from './contexts/user'
import './services/firebase';

function App() {
  return (
    <UsuarioProvider>
      <GlobalStyle/>
      <Route/>
    </UsuarioProvider> 
  );
}

export default App;
