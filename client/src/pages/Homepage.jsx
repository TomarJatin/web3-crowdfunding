import React from 'react'
import "../../src/styles.css"
import { logo } from '../assets';
import CCards from "../components/CCards"
import {CreateCamp,TrackCamp,DonateCamp} from '../assets'
function Homepage() {
  return (
    <div className="NewHomepage">
        <div className="nav">
            <img src={logo} alt="logo" />
            <h3>Crowd Funding</h3>
        </div>
        <div className="content">
            <div className="details">
                <h1>Crowd Funding</h1>
                {/* <p>What is <span>Crowd Funding?</span></p> */}
                {/* <div className="wrapper"> */}
                <h4>Our Web App is a Systematic Solution to Transparent Fundraising. With a stunning design, connected to the blockchain, metamask pairing, interaction with smart contracts, sending Ethereum through the blockchain network, writing solidity code, and, most importantly, the ability to create create, view, and donate to crowdfunding campaigns directly through the blockchain; We have made the crowd funding more Secure, Transparent and Trustable.</h4>
                {/* <img className="Banner" src="https://img.freepik.com/free-vector/saving-money-financial-concept_74855-7849.jpg?w=996&t=st=1671772157~exp=1671772757~hmac=7dcb70e6385b8e5c7a9ee8696cafe9f31e2cb0701f6c711246d2b30db1c5fd73" alt="Coins" />
                </div> */}

                <button>Get Started</button>
            </div>
            <div className="banner">
                <div className="create"><CCards title="Create Campaign" icon={CreateCamp} desc="We provide easy way to create a capaign for your idea or problems to raise funds"/></div>
                <div className="donate"><CCards title="Donate in Campaign" icon={DonateCamp} desc="You can donate to any listed campaign."/></div>
                <div className="track"><CCards title="Track your Donations" icon={TrackCamp} desc="You can track your donations through wallet addresses"/></div>
            </div>
        </div>
    </div>
  )
}

export default Homepage
