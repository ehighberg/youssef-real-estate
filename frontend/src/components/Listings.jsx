import React, { useState, useEffect} from 'react'
import axios from 'axios'


export default function Listings() {
    const [data, setData] = useState([])
    const [placeholder, setPlaceholder] = useState('Loading...')

    useEffect(() => {
        fetchListings()
    }, [])

    const fetchListings = async () => {
        const res = await axios.get('api/listing/')
        if (!res.data) {
            console.log('error')
            console.error(res.error)
            setPlaceholder('Something went wrong, try again in a few minutes.')
        } else {
            console.log('success')
            console.log(res.data)
            setData(res.data)
        }
    }

    if (!data[0]) {
        return <p>{placeholder}</p>
    } else {
        console.log(data)
        return (
            <div>
            <p>{data[0].price}</p>
            {data.map(listing => {
                return (
                    <div key={listing.id}>
                        <img src={`${listing.image}`} />
                        <p>{listing.price}</p>
                    </div>
                )
            })}
            </div>
        )
    }

}