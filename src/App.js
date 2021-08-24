import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import Photos from './components/Photos/Photos';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
// tests d

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-background">
        <Header />
        <div className="app-wrapper">
          <NavbarContainer />
          <div className="app-wrapper_content">
            <Route path='/profile' render={ () => <Profile />} />
            <Route path='/news' render={ () => <News />} />
          <Route path='/dialogs' render={ () => <DialogsContainer />} />
            <Route path='/friends' render={ () => <Friends />} />
            <Route path='/photos' render={() => <Photos />} />
            <Route path='/settings' render={ () => <Settings />} />
            <Route path='/users' render={ () => <UsersContainer />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
