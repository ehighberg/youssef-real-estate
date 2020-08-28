import React  from 'react'
import { render } from 'react-dom'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Nav from './Nav.jsx'
import Landing from './Landing.jsx'
import Listings from './Listings.jsx'

function App() {

    return (
        <React.Fragment>
        <Nav />
        <Switch>
            <Route exact path='/'><Landing /></Route>
            <Route exact path='/recent'><Listings /></Route>
        </Switch>
        <footer>&#169;{` ${new Date().getFullYear()} Weichert, Realtors`}</footer>
        </React.Fragment>
    )
}


export default App

const container = document.getElementById('app')
render(<Router><App /></Router>, container)