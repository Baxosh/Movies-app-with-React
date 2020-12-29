import React from 'react'

export const SearchBox = ({ onSearch, searchQuery }) => {
  return (
    <input
      placeholder="Search..."
      className="form-control"
      name="query"
      value={searchQuery}
      onChange={(e) => onSearch(e.currentTarget.value)}
    />
  )
}
