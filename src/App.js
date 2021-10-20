import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import ServiceInfo from "./Pages/ServiceInfo/ServiceInfo";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Login from "./Pages/Login/Login/Login";
import Services from "./Pages/Home/Services/Services";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Departments from "./Pages/Home/Departments/Departments";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/department">
              <Departments></Departments>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/serviceInfo/:serviceID">
              <ServiceInfo></ServiceInfo>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
