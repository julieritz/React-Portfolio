import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './index.css';
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import MobileNav from "./components/MobileNav";

function App() {
    return (
        < Router >
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route exact path="/skills" component={Skills} />
            <MobileNav />
        </Router >
    );
}

export default App;