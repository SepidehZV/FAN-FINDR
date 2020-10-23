import React from 'react';

export default function SearchBar(props) {

  return (
    <form action="/">
      <input className='inputSearch' type="text" placeholder="Search.." name="search" />
      <button className='btnSearch' type="submit"><i class="fa fa-search"></i> </button>
    </form>
  );
}



