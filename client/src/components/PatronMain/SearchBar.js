import React ,{useState ,useContext} from 'react';
import { useLocation,useHistory, useRouteMatch} from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import EventList from './EventList';
import StateContext from '../../StateContext';
import queryString from 'query-string';

function SearchBar() {
  const state = useContext(StateContext);
  const [searchContent, setSearchContent] = useState('');
  // keep the hisory 
  const history = useHistory ();
  // to get the path 
  const {path} = useRouteMatch ();

  

  // extract the query string from thr url => name = ball
  const { search } = useLocation();
  const {name} = queryString.parse(search);

  console.log("name", name);
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
        <EventList events ={eventDetails}/>}
        
          
        </div>
      </div>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`${path}?name=${searchContent}`);
  };
  
  

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="search"
            value={searchContent}
            onChange={(event) => setSearchContent(event.target.value)}
          />
  
          <input type="submit" value="Search" />
        </form>
  
        {name && <SearchResult name={name} />}
      </>
  );
}

export default SearchBar
