import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import Photos from './components/Photos/Photos';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-background">
        <HeaderContainer />
        <div className="app-wrapper">
          <NavbarContainer />
          <div className="app-wrapper_content">
            <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
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
