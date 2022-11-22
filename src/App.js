import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ROUTE } from './utils/constants'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';

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
          </Routes>
        </div>
      </Router>
  );
}

export default App;
