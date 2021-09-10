import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={ProductListing} />
        <Route exact path='/:id' component={ProductDetail} />
      </Router>
      
    </div>
  );
}

export default App;
