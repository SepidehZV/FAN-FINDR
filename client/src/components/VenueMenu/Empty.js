import React from 'react';


export default function Empty(props) {
  return (
    <div className="row1">
      <div className="card" >
        <img className="card-img-top" src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png" alt="Card image cap" />
        <div className="add">

          <p className="card-text"><div className = "add" onClick = {() => props.onClick}><img src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-11.49.25-PM.png" /></div></p>

        </div>
      </div >
    </div>
  )
}