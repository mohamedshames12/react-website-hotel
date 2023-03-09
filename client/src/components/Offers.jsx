import React from 'react'

const Offers = () => {
  return (
    <>
        <div className="offers">
            <h2>Offers</h2>
            <p className='name'>Promotions, deals, and special offers for you</p>
            <div className="ontainer-offers">
                <div className="one-image">
                    <img src="images/182431478.jpg" alt="" />
                    <div className="desc-image-one">
                        <h5>Escape for a while</h5>
                        <p>Enjoy the freedom of a monthly stay on</p>
                        <p>Booking.com</p>
                        <button>Discover monthly stays</button>
                    </div>
                </div>
                <div className="secand-image">
                    <img src="images/184699273.jpg" alt="" />
                    <div className="desc-image-secand">
                        <h5>New year, new adventures</h5>
                        <p>Save 15% or more when you book and</p>
                        <p>stay before March 31, 2023</p>
                        <button>Find Early 2023 Deals</button>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Offers