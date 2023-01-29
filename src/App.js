import './App.css';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { ROUTE } from './utils/constants'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import Home from './pages/Home/Home';
import Notification from './pages/Notification/Notification';
import Profile from './pages/Profile/Profile';
import Messages from './pages/Messages/Messages';
import Setting from './pages/Setting/Setting';
import store from './redux/store';
import { useUser } from './hooks/useUser';
import { useLocation } from 'react-router-dom';
import { IntercomProvider, useIntercom } from "react-use-intercom";
import Create from './pages/Create/Create';

function PrivateRoute({ children }) {
  const userStore = useUser() || {};
  const {
    isLogged = false,
    first_name = "",
    last_name = "",
    email = "",
  } = userStore || {};
  const location = useLocation();
  const { update } = useIntercom();

  useEffect(() => {
    if (isLogged) {
      update({
        name: `${first_name} ${last_name}`,
        email: email || "",
      });
    }
  }, [isLogged]);

  return children
} 

function App() {
  return (
        <IntercomProvider appId={process.env.INTERCOM_APP_ID} autoBoot>
          <Provider store = {store}>
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
                      element={<PrivateRoute>
                        <Home />
                      </PrivateRoute>}
                    />
                    <Route
                      path={ROUTE.MESSAGES.URL}
                      element={<PrivateRoute>
                        <Messages />
                      </PrivateRoute>}
                    />
                    <Route
                      path={ROUTE.NOTIFY.URL}
                      element={<PrivateRoute>
                        <Notification />
                      </PrivateRoute>}
                    />
                    <Route
                      path={ROUTE.CREATE.URL}
                      element={<PrivateRoute>
                        <Create />
                      </PrivateRoute>}
                    />
                    <Route
                      path={ROUTE.PROFILE.URL}
                      element={<PrivateRoute>
                        <Profile />
                      </PrivateRoute>}
                    />
                    <Route
                      path={ROUTE.SETTING.URL}
                      element={<PrivateRoute>
                        <Setting />
                      </PrivateRoute>}
                    />
                  </Routes>
                </div>
              </Router>
          </Provider>
        </IntercomProvider>
  );
}

export default App;
