import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize)
  if (itemsCount <= 2) return null

  const pagination = _.range(1, pageCount + 1)

  return (
    <>
      <nav>
        <ul className="pagination">
          {pagination.map((page) => (
            <li
              key={page}
              className={
                currentPage === page ? 'page-item active' : 'page-item'
              }
              style={{ cursor: 'pointer' }}
              onClick={() => onPageChange(page)}
            >
              <a href="#item" className="page-link">{page}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default Pagination
