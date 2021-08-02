import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Code from "./components/Code";
import Design from "./components/Design";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/code">
              <Code />
            </Route>
            <Route path="/design">
              <Design />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;