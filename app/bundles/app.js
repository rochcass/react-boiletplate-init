import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './nav';
import Home from './home';
import About from './about';

export default class App extends React.Component  {
    render () {
        return (
            <Router>
                <div className='wrapper'>
                    <Nav/>
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/about' component={About}/>
                            <Route render={() => <p>Not Found</p>} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}