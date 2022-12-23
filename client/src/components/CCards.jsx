import React from 'react'


function CCards(props) {
  return (
    <div className="CCards">
        <img   className="BannerImg" src={props.icon} style={{height:"30vh", width:"30vh", margin:"auto"}} alt="" />
        <h1 style={{color:"White" ,marginTop:"40px"}}>{props.title}</h1>
        <p> {props.desc}
        </p>
    </div>
  )
}

export default CCards