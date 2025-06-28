import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Hero} />
                    <Route path="/about" component={About} />
                    <Route path="/education" component={Education} />
                    <Route path="/experience" component={Experience} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/certifications" component={Certifications} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;