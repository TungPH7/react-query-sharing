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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RQUser from "./components/RQUser";
import ParallelQueries from "./components/ParallelQueries";
import DynamicParallel from "./components/DynamicParallel";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
            <li>
              <NavLink to="/rq-parallel">React Query Parallel</NavLink>
            </li>
            <li>
              <NavLink to="/rq-dynamic-parallel">
                React Query Dynamic Parallel
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/rq-users" element={<RQUsers />} />
            <Route path="/rq-users/:userId" element={<RQUser />} />
            <Route path="/rq-parallel" element={<ParallelQueries />} />
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallel userIds={[1, 2]} />}
            />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
