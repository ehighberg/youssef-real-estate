import React, { useState, useEffect} from 'react'
import axios from 'axios'

import houseIcon from '../assets/brlogo_sm.png'


export default function Listings() {
    const [listings, setListings] = useState([])
    const [placeholder, setPlaceholder] = useState('Loading...')
    const [images, setImages] = useState([])

    useEffect(() => {
        fetchListings()
        fetchImages()
    }, [])

    const fetchListings = async () => {
        const res = await axios.get('api/listing/')
        if (!res.data) {
            console.error({error: res.error})
            setPlaceholder('Something went wrong, try again in a few minutes.')
        } else {
            setListings(res.data)
        }
    }

    const fetchImages = async () => {
        const res = await axios.get('api/image/')
        if (!res.data) {
            console.error({error: res.error})
        } else {
            setImages(res.data)
        }
    }


    if (!listings[0] || !images[0]) {
        return <p>{placeholder}</p>
    } else {
        return (
            <div>
                {listings.map(listing => {
                    return (
                        <div key={listing.id}>
                            <img src={'data:image/png;base64, ' + images.filter(image => {
                                return image.listing_id === listing.id
                            })[0].base64_image} />
                            <p>{listing.price}</p>
                            <div>
                                <p><span>{listing.beds}</span> Beds</p>
                                <p><span>{listing.baths}</span> Baths</p>
                                <p><span>{listing.sq_ft}</span> Sq.Ft.</p>
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