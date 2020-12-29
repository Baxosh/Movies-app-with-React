import TableBody from './TableBody'
import TableHeader from './TableHeader'

export const Table = ({onSort, sortColumn, columns, data}) => {
  return (
    <table className="table">
    <TableHeader
      onSort={onSort}
      sortColumn={sortColumn}
      columns={columns}
    />
    <TableBody data={data} columns={columns} />
  </table>
  )
}
