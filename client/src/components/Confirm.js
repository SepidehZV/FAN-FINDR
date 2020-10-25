import React from 'react';
import Button from './Button';

export default function Confirm(props) {
  return (
    <div className="row1">
      <div className="card" >
        <img className="card-img-top" src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png" alt="Card image cap" />
        <div className="card-body">
          <h1 className="text--semi-bold">{props.message}</h1>
          <section className="events__actions">
            <Button danger onClick={props.onCancel}>Cancel</Button>
            <Button danger onClick={props.onConfirm}>Confirm</Button>
          </section>
        </div>
      </div >
    </div>

  )
}