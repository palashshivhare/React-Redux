import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path = '/' element= {<Home/>} />
          <Route path= '/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
