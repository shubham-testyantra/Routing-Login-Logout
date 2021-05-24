import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Landingpage from "./components/landing-page/Landingpage";
import Employee from "./components/employee/Employee";
import AddCompany from "./components/company/AddCompany";
import Company from "./components/company/Company";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/company" component={Company} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/add-emp" component={Employee} />
          <Route path="/add-company" component={AddCompany} />
          <Route path="/*" component={Landingpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
