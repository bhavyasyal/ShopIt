import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Home from './components/Home'
import ProductDescription from './components/product/ProductDescription'
import Login from './components/user/Login';
import Register from './components/user/Register'
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">

          <Routes>      
            <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={ <ProductDescription  /> } />
        <Route exact path="/login" element={<Login/>  }/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/me" element={ <ProtectedRoute><Profile/></ProtectedRoute>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    
  );
}
export default App;