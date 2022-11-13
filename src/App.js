import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomePage from "./components/Home";
import Users from "./components/Users";
import RQUsers from "./components/RQUsers";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Traditional Users</NavLink>
          </li>
          <li>
            <NavLink to="/rq-users">React Query Users</NavLink>
          </li>
        </ul>
      </nav>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/rq-users" element={<RQUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
