import React from 'react'

const Browse = () => {
  return (
    <div className='container'>
        <h2 className='heading'>Browse by property type  </h2>
        <div className="wrapper">
            <div className="box">
                <img src="images/pexels-binyamin-mellish-106399.jpg" alt="" />
                <h4>Hotels</h4>
                <p>300 hotels</p>
            </div>
            <div className="box">
                <img src="images/pexels-evgeny-tchebotarev-2187605.jpg" alt="" />
                <h4>apartments</h4>
                <p>300 hotels</p>
            </div>
            <div className="box">
                <img src="images/pexels-pixabay-280229.jpg" alt="" />
                <h4>villas</h4>
                <p>300 hotels</p>
            </div>
            <div className="box">
                <img src="images/pexels-pixabay-53610.jpg" alt="" />
                <h4>cabins</h4>
                <p>300 hotels</p>
            </div>
        </div>
    </div>
  )
}

export default Browse