import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Routers from './routes'
import {
  BrowserRouter as Router
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routers />
      </Router>
    </div>
  );
}

export default App;
