import React from "react";

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
        </div>
      </header>
    </>
  );
};

export default Header;
