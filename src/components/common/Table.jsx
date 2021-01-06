import TableBody from './TableBody'
import TableHeader from './TableHeader'

// Styles 
// import styled from 'styled-components'
// Create a TableStyle component that'll render an <table> tag with some styles

// const TableStyle = styled.table `
//   margin-top: 50px;
// `

export const Table = ({ onSort, sortColumn, columns, data }) => {
  return (
    <table className="table">
      <TableHeader onSort={onSort} sortColumn={sortColumn} columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  )
}
