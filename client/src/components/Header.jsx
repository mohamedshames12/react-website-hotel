import React from "react";
import {BiBed} from "react-icons/bi"
import {MdFlight, MdOutlineAttractions, MdLocalTaxi} from "react-icons/md"
import {AiFillCar} from "react-icons/ai"
const Header = () => {
  return (
    <>
      <header>
        <div className="heager">
          <div className="contaner-header">
            <div className="box-header">
              <h1>Booking.com </h1>
              <div className="select">
                <p>EGP</p>
                <img src="icons/america.png" alt="" />
                <img src="icons/question.png" alt="" />
                <h5>List your property</h5>
                <div className="auth">
                  <h4>register</h4>
                  <h4>sign in</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="stays">
            <div className="box-stays">
              <BiBed />
              <span>Stays</span>
            </div>
            <div className="box-stays">
              <MdFlight />
              <span>flight</span>
            </div>
            <div className="box-stays">
              <AiFillCar />
              <span>Stays</span>
            </div>
            <div className="box-stays">
              <MdOutlineAttractions />
              <span>Attractions</span>
            </div>
            <div className="box-stays">
              <MdLocalTaxi />
              <span>airport taxis</span>
            </div>
          </div>
          <div className="find">
              <h1>Find your next stay</h1>
              <p>Search deals on hotels, homes, and much more...</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
