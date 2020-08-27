import React from 'react'

import BioCard from './BioCard.jsx'


export default function Landing() {
    return (
        <main>
            <div>
                <p>About Us</p>
                <BioCard name='david'/>
                <BioCard name='nagi'/>
            </div>
            <div>
                <p>About Weichert, Realtors</p>
                <p>Ipso Facto, IDK</p>
            </div>
        </main>
    )
}