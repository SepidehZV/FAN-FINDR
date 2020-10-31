import React, { useContext, useEffect } from 'react';
import './index.scss';
import NavigationBar from '../NavigationBar';
import CoverPhoto from '../CoverPohto';
import Sidebar from '../Sidebar';
import StateContext from '../../StateContext';
import SetStateContext from '../../SetStateContext';
import axios from 'axios';
import useVisualMode from "../../hooks/useVisualMode";
import Menu from './Menu';
import Button from './Button';
import Empty from './Empty';
import Form from './Form';


export default function VenueMenu(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";

  const state = useContext(StateContext);
  const setState = useContext(SetStateContext)
  // const [menu, setMenu] = useState([]);

  const { mode, transition, back } = useVisualMode(SHOW);



  const deleteMenu = (id) => {
    axios.delete(`http://localhost:3001/api/venues/${state.venue.id}/menu/${id}`)
      .then(res => {
        const tempMenu = state.menuList.filter((e) => e.id !== id)
        setState(prev => ({ ...prev, menuList: tempMenu }))
      })
      .catch(err => console.log(err))
  }

  function updateMenu(id, item_name, price, item_description, venue_id) {
    const updated = { id, item_name, price, item_description, venue_id };
    const menuList = [...state.menuList];
    return axios
      .put(`http://localhost:3001/api/venues/${venue_id}/menu/${id}`, { item_name, price, item_description })
      .then(res => {
        console.log("put result", res.data);
        const index = menuList.findIndex(i => i.id === updated.id);
        menuList[index] = updated;
        setState((prev) => ({ ...prev, menuList }));
        transition(SHOW);
      })
      .catch(err => console.log(err));

  }
  const addMenuItem = (id, item_name, price, item_description, venue_id) => {
    const newMenuItem = { item_name, price, item_description, venue_id };
    console.log("newMenuItem", newMenuItem)
    const updatedMenuList = [...state.menuList, newMenuItem];
    return axios.post(`http://localhost:3001/api/venues/${venue_id}/menu`, { item_name, price, item_description, venue_id })
      .then(res => {
        console.log("res.data", res.data)
        setState(prev => ({ ...prev, menuList: updatedMenuList }))
        transition(SHOW);
      })
      .catch(err => console.log(err));
  }
  
  const menuList = state.menuList.map((item) => {
    return (
      <Menu
        key={item.id}
        id={item.id}
        item_name={item.item_name}
        item_description={item.item_description}
        price={item.price}
        venue_id={item.venue_id}
        deleteMenu={deleteMenu}
        updateMenu={updateMenu}
        addMenuItem={addMenuItem}
        mode={SHOW}

      />
    );
  });


  return (
    <main className="layout">
      <div>
        <section><NavigationBar /></section>
        <section><CoverPhoto /></section>
        <div className="conrinerforflex">

          <section><Sidebar /></section>
          <div className="venueMenu-flex-col">
            {menuList}
            {mode === SHOW && <button type="submit" type="submit" className="btn btn-primary" onClick={() => transition(CREATE)}>Add New</button>}

            {mode === CREATE && <Form
              id={null}
              item_name={null}
              item_description={null}
              price={null}
              venue_id={state.venue.id}
              onSave={addMenuItem}
              onCancel={() => back()}
              transition={transition} />}
          </div>

        </div>
      </div>
    </main>
  );
}