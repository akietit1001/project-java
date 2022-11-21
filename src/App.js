import Sidebar from './layouts/Sidebar/Sidebar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";


function App() {
  return (
    <Sidebar />
  );
}

export default App;
