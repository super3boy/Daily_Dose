import React from 'react'
import { Button } from '../button/Button'
import './Header.css'
import headerVideo from '../../../src/videos/video-2.mp4'
import  Typical  from 'react-typical'

function Header() {
    return (
        <>
            <div className="header-container">
                <video controls autoPlay loop muted>
                <source src={headerVideo} type="video/mp4"></source>
                </video>
                <h1>DISCOVER YOURSELF</h1>
                <p>What are you waiting for? <br/>
                    <Typical
                    className='typing'
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Search',
                        200,
                        'Search Now',
                        10000
                    ]}
                    />
                </p>
                <div className="header-btns">
                    <input type="text" className="form-control w-100 m-auto search-input" placeholder="Search ..."></input>
                </div>
            </div>
        </>
    )
}

export default Header
