import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import axios from 'axios'

function App () {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [placeholder, setPlaceholder] = useState('Loading')

    useEffect(() => {
        fetchListings()
    })

    const fetchListings = async () => {
        const res = await axios.get('api/listing')
        console.log(res)
        setData([{price: '$35,000', id: 1}])
        if (!res.data) {
            console.log(res)
        } else {
            setData(res.data)
        }
    }

    return (
        <ul>
            {data.map(listing => {
                return (
                    <li key={listing.id}>
                        {listing.price}
                    </li>
                )
            })}
            <li>HAM</li>
        </ul>
    )
}


export default App

const container = document.getElementById('app')
render(<App />, container)