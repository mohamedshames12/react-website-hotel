import React from 'react'

const Homes = () => {
  return (
    <div className='container'>
        <h2>Homes guests love</h2>
        <div className="homes">
            <div className="box">
                <img src="images/homes.jpg" alt="" />
                <h4>aparthotel stare miasto</h4>
                <p>madrid</p>
                <h5>starting from $130</h5>
                <div className="flex">
                    <p className='num'>8.5</p>
                    <p>excellent</p>
                </div>
            </div>
            <div className="box">
                <img src="images/homes2.jpg" alt="" />
                <h4>comfort suites airport</h4>
                <p>austin</p>
                <h5>starting from $330</h5>
                <div className="flex">
                    <p className='num'>8.8</p>
                    <p>excellent</p>
                </div>
            </div>
            <div className="box">
                <img src="images/homes3.jpg" alt="" />
                <h4>four seasons hotel</h4>
                <p>lisbon</p>
                <h5>starting from $210</h5>
                <div className="flex">
                    <p className='num'>7.1</p>
                    <p>excellent</p>
                </div>
            </div>
            <div className="box">
                <img src="images/homes4.jpg" alt="" />
                <h4>hilton garden lnn</h4>
                <p>berlin</p>
                <h5>starting from $530</h5>
                <div className="flex">
                    <p className='num'>9.5</p>
                    <p>excellent</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homes