const getVenueData = (venues,photos) => {
  const venue = {};
  for (const ven of venues) {
    if (!venue[ven.id]) {
      venue[ven.id] = {
        id: ven.id,
        owner_id: ven.owner_id,
        venue_name: ven.venue_name,
        venue_description: ven.venue_description,
        venue_logo_url: ven.venue_logo_url,
        cover_url: ven.cover_url,
        category: ven.categorie_name,
        address: {},
        info: {}
      };
    }

    venue[ven.id].address = {
      street: ven.street,
      city: ven.city,
      province: ven.province,
      country: ven.country,
      venue_zip_code: ven.venue_zip_code
    };
    venue[ven.id].info = {
      phone: ven.phone,
      capacity: ven.capacity,
      age_restriction: ven.age_restriction,
      dress_code: ven.dress_code
    };
  }
  
  
  
  return Object.values(venue);
};

module.exports = {
  getVenueData,
};