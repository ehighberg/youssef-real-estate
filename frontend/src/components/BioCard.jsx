import React, { useState, useEffect } from 'react'

import DavidPic1 from '../assets/david1.png'
import DavidPic2 from '../assets/david1.png'
import NagiPic1 from '../assets/david1.png'
import NagiPic2 from '../assets/david1.png'


export default function BioCard(props) {
    const davidInfo = {
        name: 'David Youssef',
        pic1: DavidPic1,
        pic2: DavidPic2,
        bioString: "Lorem Ipsum something something blah blah blah",
        zinger: "I love pizza!"
    }

    const nagiInfo = {
        name: 'Nagi Youssef',
        pic1: NagiPic1,
        pic2: NagiPic2,
        bioString: "Lorem Ipsum something something blah blah blah",
        zinger: "Egypt was the worst!"
    }

    const [cardInfo, setCardInfo] = useState({})

    useEffect(() => {
        if (props.name === 'david') {
            setCardInfo(davidInfo)
        } else {
            setCardInfo(nagiInfo)
        }
    }, [])

    return (
        <div>
            <p>{cardInfo.name}</p>
            <img src={`/static/frontend/${cardInfo.pic1}`} />
            <img src={`/static/frontend/${cardInfo.pic2}`} />
            <p>{cardInfo.bioString}</p>
            <p>{cardInfo.zinger}</p>
        </div>
    )
}