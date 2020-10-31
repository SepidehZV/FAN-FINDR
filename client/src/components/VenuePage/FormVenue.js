import React, {useState, useContext} from 'react'
import StateContext from '../../StateContext';

export default function FormVenue(props) {
  const state = useContext(StateContext);
  console.log(state.venue);
  const [venue_zip_code, setZipCode] = useState(state.venue.venue_zip_code);
  const [venue_name, setVenueName] = useState(state.venue.venue_name);
  const [street, setStreet] = useState(state.venue.street);
  const [city, setCity] = useState(state.venue.city);
  const [province, setProvince] = useState(state.venue.province);
  const [country, setCountry] = useState(state.venue.country);
  const [phone, setPhone] = useState(state.venue.phone);
  const [venue_email, setEmail] = useState(state.venue.venue_email);
  const [dress_code, setDressCode] = useState(state.venue.dress_code);
  const [capacity, setCapacity] = useState(state.venue.capacity);
  const [categorie_name, setCategory] = useState(state.venue.categorie_name);
  const [venue_description, setDescription] = useState(state.venue.venue_description);
  const [age_restriction, setAge] = useState(state.venue.age_restriction);
  


  function handleSave(ev) {
    ev.preventDefault();
    props.onSave(state.venue.id,venue_name,
      street, country, venue_zip_code , province ,
      venue_description , phone,venue_email, capacity,
      age_restriction, dress_code , categorie_name,city,state.venue, state);
  }
    return (
      <div className ="line-fo-resizing-formvenue">
           <div className="btn-submit1">
      <button type="submit" className="btn btn-primary" onClick={handleSave} >Save</button>
      </div>
      <div className="btn-submit2">
      <button type="submit" className="btn btn-danger" onClick={props.onCancel}>Cancel</button>
      </div>
    <form >
      <h2>Edit Venue Profile</h2>
     
      <hr className="seprating" />

      <div className="row">

        <div className="col-md-6">
          <div className="form-group">
            <label for="VenueName">Venue Name</label>
            <input type="text" className="form-control" placeholder="" id="VenueName" value={venue_name} onChange={(e) => setVenueName(e.target.value)} />
          </div>
        </div>
  
        <div className="col-md-6">
          <div className="form-group">
            <label for="description">Description</label>
            <input type="text" className="form-control" placeholder="" id="description" value={venue_description} onChange={(e) => setDescription(e.target.value)}/>
          </div>
        </div>

      </div>
  
  
      <div className="row">
       
        <div className="col-md-6">
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="email"  value={venue_email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>

      <div className="col-md-6">
          <div className="form-group">
            <label for="phone">Phone</label>
            <input type="text" className="form-control" placeholder="" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>
        </div>

        </div>

  
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
          <label for="categorie">Category</label>
          <select className=" form-control custom-select browser-default" value={categorie_name} onChange={(e) => setCategory(e.target.value)}  selected="selected">
                    <option value="AB" >Sport Bar</option>
                    <option value="BC">hotel bar</option>
                    <option value="ON">bar and grille</option>
                    <option value="QC">Casino</option>
                    <option value="QC">Nightclub</option>
                    <option value="QC">casual or pub</option>
                  </select> 
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label for="capacity">Capacity</label>
            <input type="text" className="form-control" id="capacity" placeholder="capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
          </div>
        </div>

      </div>  

      <div className="row">

<div className="col-md-6">
  <div className="form-group">
    <label for="dress-code">Dress-Code</label>
    <input type="text" className="form-control" placeholder="" id="dress-code" value={dress_code} onChange={(e) => setDressCode(e.target.value)}/>
  </div>
</div>


<div className="col-md-6">
  <div className="form-group">
    <label for="age">Age restriction</label>
    <input type="text" className="form-control" placeholder="" id="age" value={age_restriction} onChange={(e) => setAge(e.target.value)}/>
  </div>
</div>

</div>

<div className="row">

<div className="col-md-6">
<div className="form-group">
<label for="Street">Street</label>
  <input type="text" id="Street" className="form-control" placeholder=""  required  value={street} onChange={(e) => setStreet(e.target.value)}/>
    </div>
</div>





<div className="col-md-6">
<div className="form-group">
<label for="City">City</label>
<input type="text" id="City" className="form-control" placeholder="City"  required  value={city} onChange={(e) => setCity(e.target.value)}/>
</div>
</div>

</div>




<div className="row">

<div className="col-md-6">
  <div className="form-group">
  <label for="province">Province</label>
  <select className=" form-control custom-select browser-default" value={province} onChange={(e) => setProvince(e.target.value)} selected="selected">
                    <option value="AB" >Alberta</option>
                    <option value="BC">British Columbia</option>
                    <option value="ON">Ontario</option>
                    <option value="QC">Quebec</option>
                  </select> 
  </div>
</div>

<div className="col-md-6">
  <div className="form-group">
  <label for="Country">Province</label>
  <select className=" form-control custom-select browser-default" value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="Canada">Canada</option>
                  </select> 
  </div>
</div>

</div>





<div className="row">

<div className="col-md-6">
<div className="form-group">
<label for="Zip-Code">Zip-Code</label>
<input type="text" id="Zip-Code" className="form-control" placeholder="Zip-Code"  required  value={venue_zip_code} onChange={(e) => setZipCode(e.target.value)}/>
                </div>
</div>
</div>

















<div className="busnisshours"> 
<h5 >Business Hours</h5>
<hr className="seprating" />

        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th >Day</th>
                <th >From</th>
                <th >To</th>
              </tr>
            </thead>
            <tr>
            <th >Monday</th>
        <td>
            <div className="md-form md-outline">
                <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>

        <td>
            <div className="md-form md-outline">
                 <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>
            </tr>  

            <tr>
            <th >Tuesday</th>

        <td>
            <div className="md-form md-outline">
                <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>

        <td>
            <div className="md-form md-outline">
                 <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>
            </tr>  
            <tr>
            <th >Wednesday</th>

        <td>
            <div className="md-form md-outline">
                <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>

        <td>
            <div className="md-form md-outline">
                 <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>
            </tr>  
            <tr>
            <th >Thursday</th>

        <td>
            <div className="md-form md-outline">
                <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>

        <td>
            <div className="md-form md-outline">
                 <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>
            </tr> 
            <tr>
            <th >Friday</th>

        <td>
            <div className="md-form md-outline">
                <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>

        <td>
            <div className="md-form md-outline">
                 <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>
            </tr>  
            <tr>
            <th >Saturday</th>

        <td>
            <div className="md-form md-outline">
                <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>

        <td>
            <div className="md-form md-outline">
                 <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>

            </tr>  


            <tr>
            <th >Sunday</th>

        <td>
            <div className="md-form md-outline">
                <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>
        <td>
            <div className="md-form md-outline">
                 <input type="time" id="default-picker" className="form-control" placeholder="Select time"/>
            </div>
        </td>
            </tr>  
              <tbody>
              
            </tbody>
          </table>

        </div>
    </div>
  

    </form>

  </div>
    )
}
