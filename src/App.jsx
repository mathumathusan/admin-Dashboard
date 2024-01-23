import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/home/Home';
import Userlist from './pages/userlist/Userlist';
import './App.css';
import User from './pages/user/User';

function App() {
  return (
    <Router>
      <TopBar />
      <div className='container'>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/users' element={<Userlist />} />
          <Route path='/user/:userId' element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
