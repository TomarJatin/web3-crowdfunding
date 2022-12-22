import React from 'react'
import "../../src/styles.css"
function Homepage() {
  return (
    <div className="Homepage">
        <div className="nav">
            <img src="https://relaxed-monstera-b62a85.netlify.app/assets/logo.62c9c431.svg" alt="logo" />
            <h3>Crowd Funding</h3>
        </div>
        <div className="content">
            <div className="details">
                <h1>Crowd Funding</h1>
                {/* <p>What is <span>Crowd Funding?</span></p> */}
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias dolores aspernatur perferendis nisi fuga obcaecati blanditiis distinctio, ut delectus, modi beatae eum esse ad labore praesentium sint! In, fuga.</h4>
                <button>Get Started</button>
            </div>
            <div className="banner">
                <div className="create"></div>
                <div className="donate"></div>
                <div className="track"></div>
            </div>
        </div>
    </div>
  )
}

export default Homepage
