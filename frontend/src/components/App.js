import React, { useState, useEffect, Fragment } from 'react'
import { render } from 'react-dom'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

import Nav from './Nav.jsx'
import Landing from './Landing.jsx'

function App() {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [placeholder, setPlaceholder] = useState('Loading')

    useEffect(() => {
        fetchListings()
    }, [])

    const fetchListings = async () => {
        const res = await axios.get('api/listing')
        if (!res.data) {
            console.log(res)
        } else {
            setData(res.data)
        }
    }

    return (
        <Fragment>
        <Nav />
        <Switch>
            <Route exact path='/'><Landing /></Route>
        </Switch>
        <ul>
            {data.map(listing => {
                return (
                    <li key={listing.id}>
                        {listing.price}
                    </li>
                )
            })}
        </ul>
        </Fragment>
    )
}


export default App

const container = document.getElementById('app')
render(<Router><App /></Router>, container)