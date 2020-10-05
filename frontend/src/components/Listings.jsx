import React, { useState, useEffect} from 'react'
import axios from 'axios'

import houseIcon from '../assets/brlogo_sm.png'


export default function Listings() {
    const [listings, setListings] = useState([])
    const [placeholder, setPlaceholder] = useState('Loading...')

    useEffect(() => {
        fetchListings()
    }, [])

    const fetchListings = async () => {
        const res = await axios.get('api/listing/')
        if (!res.data) {
            console.error({error: res.error})
            setPlaceholder('Something went wrong, try again in a few minutes.')
        } else {
            console.log(res.data[0])
            setListings(res.data)
        }
    }


    const format_with_commas = number => {
        number = number.toString()
        let output = []
        while (number.length > 3) {
            output.push(number.slice(-3))
            number = number.slice(0, -3)
        }
        output.push(number)
        return `${output.reverse().join(',')}`
    }


    if (!listings[0]) {
        return <p>{placeholder}</p>
    } else {
        return (
            <div>
                {listings.map(listing => {
                    return (
                        <div key={listing.id}>
                            <img src={`${listing.photo}`} />
                            <p>{`$${format_with_commas(listing.price)}`}</p>
                            <div>
                                <p><span>{listing.beds}</span> Beds</p>
                                <p><span>{listing.baths}</span> Baths</p>
                                <p><span>{format_with_commas(listing.sq_ft)}</span> Sq.Ft.</p>
                            </div>
                            <p>{listing.address}</p>
                            <p>{listing.city_state}</p>
                            <div>
                                <img src={`/static/frontend/${houseIcon}`} />
                                <p>Courtesy of <span>{listing.photo_credit}</span></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}