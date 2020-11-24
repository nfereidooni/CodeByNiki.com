import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/nf_react_portfolio" component={About} />
            <Route exact path="/nf_react_portfolio/contact" component={Contact} />
            <Route exact path="/nf_react_portfolio/portfolio" component={Portfolio} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;