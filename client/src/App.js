import logo from './logo.svg';
import './App.css';
import 'react-bootstrap';
import { Container } from 'react-bootstrap';
// import CallCard from './components/callCard'
import { Routing } from './utils/routing';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
  );
}

export default App;
