import React, { useState, useContext } from 'react';



export default function Form(props) {



  const [price, setPrice] = useState(props.price);
  const [item_description, setItem_description] = useState(props.item_description);
  const [item_name, setItem_name] = useState(props.item_name);

  function validate(ev) {
    ev.preventDefault();

    if (props.mode === "EDIT") {
      return props.onUpdate(props.id, item_name, price, item_description, props.venue_id);
    } else {
      return props.onSave(item_name, price, item_description, props.venue_id);
    }

  }
  return (

    <div className="row1">
      <div className="card" >
        <img className="card-img-top" src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png" alt="Card image cap" />
        <div className="card-body">
          <div className="sport_name">
            <input placeholder=" name" value={item_name} onChange={(e) => setItem_name(e.target.value)} />
            <input placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
        </div>
        <div></div>
        <div className="card-body">
          <div className="edit-and-delete" >
            <p className="card-text"><input placeholder="description" value={item_description} onChange={(e) => setItem_description(e.target.value)} /></p>
            <div className="edit-and-delete">
              <div className="save" onClick={validate}><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
              </svg> </div>
              <div className="canel" onClick={() => props.onCancel()} >
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div >
      </div>
    </div >
  );
}
