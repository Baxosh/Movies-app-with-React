import { Component } from 'react'

class TableHeader extends Component {
  handleSort = (path) => {
    const sortColumn = { ...this.props.sortColumn }
    if (sortColumn.path !== path) {
      sortColumn.path = path
      sortColumn.order = 'desc'
    } else sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'

    this.props.onSort(sortColumn)
  }

  renderIcon = (column) => {
    const { path, order } = this.props.sortColumn
    if (column.path !== path) return null
    return <i className={`fa fa-sort-${order}`}></i>
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              style={{ cursor: 'pointer' }}
              key={column.path || column.label}
              onClick={() => this.handleSort(column.path)}
            >
              {column.label}
              {this.renderIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    )
  }
}

export default TableHeader
