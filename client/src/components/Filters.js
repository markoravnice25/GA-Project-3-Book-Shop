import React from 'react'



const Filters = ({ filters, handleChange }) => {
  return (
    <div className="filter-container">


      <input type="text" name="searchTerm" placeholder='🔍Search...' value={filters.searchTerm} onChange={handleChange} />
      <button type="submit" className="btn btn-warning w-100">Submit</button>
    </div>
  )
}

export default Filters