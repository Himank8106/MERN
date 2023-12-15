import { Route, Routes, NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Labs from './Components/Labs';
import Support from './Components/Support';
import MainHeader from './Components/MainHeader';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">

      {/* <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/labs'>Labs</Link>
          </li>
          <li>
            <Link to='/support'>Support</Link>
          </li>
        </ul>
      </nav> */}

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>

        {/* <Route path='/' element={<Home/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/labs' element={<Labs/>}/>
        <Route path='*' element={<Home/>}/> */}

        <Route path='/' element={<MainHeader/>}>
          <Route path='/' element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/labs' element={<Labs/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
