import React from 'react'
import CardItem from '../CardItem'
import './Cards.css'
import cardsImg1 from '../../../images/img-9.jpg';
import cardsImg2 from '../../../images/img-2.jpg';
import cardsImg3 from '../../../images/img-3.jpg';
import cardsImg4 from '../../../images/img-4.jpg';
import cardsImg5 from '../../../images/img-8.jpg';


function Cards() {
    return (
        <>
            <div className="cards">
                <h1>CHECK OUT THIS EPIC DESTINATIONS!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                        <CardItem
                            src={cardsImg1}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={cardsImg2}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                        </ul>
                        <ul className='cards__items'>
                        <CardItem
                            src={cardsImg3}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src= {cardsImg4}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={cardsImg5}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
