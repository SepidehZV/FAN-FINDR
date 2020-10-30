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
  eidtMenuItems}) => {

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
  })
  
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
    const {id,item_name, price,item_description,venue_id} = req.body;
    eidtMenuItems(id,item_name, price,item_description,venue_id) 
      .then((menuItem) => {console.log(menuItem);
        res.json(menuItem)})
      .catch((err) => res.json({ err }));
  });
  router.post('/:id/menu', (req, res) => {
    const {item_name, price,item_description,venue_id} = req.body;
    //console.log(req.body);

    addNewMenuItems(item_name, price,item_description,venue_id ) 
      .then((menuItem) =>{ 
      console.log(menuItem);res.json(menuItem)})
      .catch((err) => res.json({ err }));
  });

  router.get('/:id/hours',(req,res) =>{
    getBussniessHours(req.params.id)
    .then((openinghours) => res.json(openinghours))
    .catch((err) => res.json({ err }));
  });

  router.get('/:id/favouriteEvents',(req,res) =>{
    getFavouritesEventsCountForDayByVenueId(req.params.id)
      .then((favourite) => res.json(favourite))
      .catch((err) => res.json({ err }));
      console.log(req.params.id)
  });


  return router;
};
