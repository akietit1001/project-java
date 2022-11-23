import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ROUTE } from './utils/constants'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import Home from './pages/Home/Home';
import Notification from './pages/Notification/Notification';
import Profile from './pages/Profile/Profile';
import Messages from './pages/Messages/Messages';
import Setting from './pages/Setting/Setting';

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route 
              path={ROUTE.LOG_IN.URL}
              element = {<Login />}
            />
            <Route 
              path={ROUTE.REGISTER.URL}
              element = {<Register />}
            />
            <Route 
              path={ROUTE.FORGET_PASSWORD.URL}
              element={<ForgetPassword />}
            />
            <Route 
              path={ROUTE.HOME.URL}
              element={<Home />}
            />
            <Route 
              path={ROUTE.MESSAGES.URL}
              element={<Messages />}
            />
            <Route 
              path={ROUTE.NOTIFY.URL}
              element={<Notification />}
            />
            <Route 
              path={ROUTE.PROFILE.URL}
              element={<Profile />}
            />
            <Route 
              path={ROUTE.SETTING.URL}
              element={<Setting />}
            />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
