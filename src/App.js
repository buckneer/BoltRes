
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Room from "./pages/room/Room";


const routes = [
  {
    element: <Home />,
    path: "/"
  },
  {
    element: <Login />,
    path: "/login"
  },
  {
    element: <Register />,
    path: "/register"
  },
  {
    element: <Room />,
    path: "/room"
  }
]

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map(route => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
