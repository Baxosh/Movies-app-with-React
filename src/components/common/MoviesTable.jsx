import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Like from './Like'
import { ProtectUser } from './ProtectUser'
import { Table } from './Table'

// Styles 
import styled from 'styled-components'
// Create a TableStyle component that'll render an <div> tag with some styles


class MoviesTable extends Component {
  columns = [
    {
      path: 'title',
      label: 'Title',
      content: ({ _id, title }) => <Link to={`/movies/${_id}`}>{title}</Link>,
    },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      label: 'Likes',
      content: (movie) => (
        <Like
          liked={movie.liked}
          onToggleLike={() => this.props.onToggleLike(movie)}
        />
      ),
    },
    {
      key: 'delete',
      label: `${this.props.user?.isAdmin ? 'Delete' : ''}`,
      content: (movie) => (
        <>
          {this.props.user?.isAdmin && (
            <button
              onClick={() => this.props.onDelete(movie._id)}
              className="btn btn-sm btn-danger"
            >
              Delete
            </button>
          )}
        </>
      ),
    },
  ]

  render() {
    const { movies, onSort, sortColumn } = this.props
    return (
      <div>
        <Table
          onSort={onSort}
          data={movies}
          sortColumn={sortColumn}
          columns={this.columns}
        />
      </div>
    )
  }
}

export default MoviesTable
