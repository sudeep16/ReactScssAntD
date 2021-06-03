import "./assets/styles/app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard";

if (localStorage.usertoken) {
  setAuthToken(localStorage.usertoken);
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/adminDashboard" component={AdminDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
