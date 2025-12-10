import React from 'react'
import { CiBaseball } from "react-icons/ci";

const Search = () => {
  return (
    <div id="search">
      <div className='search__inner'>
        <label htmlFor='searchInput'>
            <span className='ir'><CiBaseball /></span>
        </label>
        <input type="search" name='search__inner' id='searchInput' autoComplete='off' className='search__input' placeholder='검색어를 입력하세요'/>
      </div>
    </div>
  )
}

export default Search
