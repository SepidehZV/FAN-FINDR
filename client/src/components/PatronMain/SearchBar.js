import React ,{useState ,useContext} from 'react';
import { useLocation,useHistory, useRouteMatch} from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import EventList from './EventList';
import StateContext from '../../StateContext';
import queryString from 'query-string';

function SearchBar(props) {
  const state = useContext(StateContext);
  const [searchContent, setSearchContent] = useState('');
  // keep the hisory 
  const history = useHistory ();
  // to get the path 
  const {path} = useRouteMatch ();

  

  // extract the query string from thr url => name = ball
  const { search } = useLocation();
  const {name} = queryString.parse(search);

  //console.log("name", name);
  const SearchResult = ({ name }) => {
    // using the custom hook to get the data
    const { eventDetails, loading, error } = useSearch(name);
     console.log(eventDetails);
    // Extract and parse query string (useLocation, queryString.parse )

    return (
      <div>
        <h3>Search for: {name}</h3>
        {/* output loading if loading */}
        {loading && <h3>Loading ...</h3>}

        
        <div className="search-result">
        {eventDetails &&
        <EventList events ={eventDetails} addFav={props.addFav} removeFav={props.removeFav}/>}
        
          
        </div>
      </div>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`${path}?name=${searchContent}`);
  };
  
  

    return (
      <div class="container">
      <h2>Enter your Favorite Team,Event ..</h2>

<form onSubmit={handleSubmit}> 

<div class="row">
<div class="col-12">
    <div class="input-group">
    <input class="form-control border-secondary py-2" name="name" type="search"
  value={searchContent}
  onChange={(event) => setSearchContent(event.target.value)}/>
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="submit" value="Search">
                <i class="fa fa-search"></i>
            </button>
        </div>
    </div>
</div>
</div>
{name && <SearchResult name={name} />}                 

</form>
</div>
  );
}

export default SearchBar
