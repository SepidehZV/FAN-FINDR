const express = require('express');
const router = express.Router();

const {getVenueData} = require ('../helpers/dataHelpers')

module.exports = ({ getVenues,
  getVenueById,
  addVenue,
  getPhotos,
  getMenuItems,
  getBussniessHours,
  getFavouritesEventsCountForDayByVenueId,
  deleteMenuItem, 
  addNewMenuItems,
  eidtMenuItems,
  editHours,
  editVenueById,
  deleteEvent}) => {

  /* GET venues listing. */
  router.get('/', (req, res) => {
    getVenues()
      .then((venues) => res.json(venues))
      .catch((err) => res.json({ err }));
  });

  router.get('/:id',(req,res) =>{
    getVenueById(req.params.id)
    .then((venue) => res.json(venue))
    .catch((err) => res.json({ err }));
  });
  router.post('/', (req,res) => {
    const {owner_id, venue_name, street,city, province,country,venue_zip_code} = req.body;
    addVenue(owner_id, venue_name, street,city, province,country,venue_zip_code)
      .then((venue) => res.json(venue))
      .catch((err) => res.json({ err }));
  });

  router.put('/:id', (req,res) => {
    const {venue_name,street, country, venue_zip_code , province , venue_description , phone,venue_email, capacity, age_restriction, dress_code , category_id,city} = req.body;
    console.log(req.body);
    editVenueById(req.params.id,venue_name,street, country, venue_zip_code , province , venue_description , phone,venue_email, capacity, age_restriction, dress_code , category_id,city)
      .then((venue) => {
        //console.log(venue);
        res.json(venue)})
      .catch((err) => res.json({ err }));
  });
  
  router.get('/:id/photos',(req,res) =>{
    getPhotos(req.params.id)
    .then((photos) => res.json(photos))
    .catch((err) => res.json({ err }));
  });
  router.get('/:id/menu',(req,res) =>{
    getMenuItems(req.params.id)
    .then((menu_items) => res.json(menu_items))
    .catch((err) => res.json({ err }));
  });

  router.delete('/:venuId/menu/:id',(req,res) =>{
    deleteMenuItem(req.params.id,req.params.venuId)
    .then((menu_items) => res.json(menu_items))
    .catch((err) => res.json({ err }));
  });

  router.put('/:venuId/menu/:id', (req, res) => {
    const {item_name, price,item_description} = req.body;
    eidtMenuItems(req.params.id,item_name, price,item_description,req.params.venuId) 
      .then((menuItem) => 
        res.json(menuItem))
      .catch((err) => res.json({ err }));
  });

  router.post('/:id/menu', (req, res) => {
    const {item_name, price,item_description} = req.body;
    console.log(req.body);
    addNewMenuItems(item_name, price,item_description,req.params.id ) 
      .then((menuItem) =>{ 
      console.log(menuItem);res.json(menuItem)})
      .catch((err) => res.json({ err }));
  });

  router.get('/:id/hours',(req,res) =>{
    getBussniessHours(req.params.id)
      .then((openinghours) => res.json(openinghours))
      .catch((err) => res.json({ err }));
  });
  router.put('/:id/hours',(req,res)=>{
    const{day,open_time,close_time} = req.body;
    editHours(day,open_time,close_time,req.params.id)
      .then ((newTime)=> res.json(newTime))
      .catch((err) => res.json({err}));
  });

  router.get('/:id/photos',(req,res) =>{
    getPhotos(req.params.id)
      .then((photos) => res.json(photos))
      .catch((err) => res.json({ err }));
  });

  router.get('/:id/favouriteEvents',(req,res) =>{
    getFavouritesEventsCountForDayByVenueId(req.params.id)
      .then((favourite) => res.json(favourite))
      .catch((err) => res.json({ err }));
      console.log(req.params.id)
  });
  router.delete('/:venueId/event/:eventId',(req,res) =>{
    deleteEvent(req.params.eventId , req.params.venuId)
      .then((event) => res.json(event))
      .catch((err) => res.json({ err }));
  });
  

  return router;
};
