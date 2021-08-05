import React from 'react'
import './Header.css'
import './Home.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                <div className="container">
            <div className="row height-90 align-items-center justify-content-center">
              <div className="col">
                <div className="banner text-center">
                  <h1 className="display-1 text-capitalize w-50 mx-auto">
                    <strong className="primary-color">ELECTRO</strong>
                    <small className="color-color"> .CO</small>
                  </h1>
                  <a
                    href="/shop"
                    className="btn main-btn estratweni-btn my-4 text-capitalize"
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;