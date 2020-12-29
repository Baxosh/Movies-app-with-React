export const ListGroup = ({
  items,
  nameProperty = 'name',
  idProperty = '_id',
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className={
            item === selectedItem || item[0] ? 'list-group-item active' : 'list-group-item'
          }
          style={{ cursor: 'pointer' }}
          key={item[idProperty] || item[nameProperty]}
          onClick={() => onItemSelect(item)}
        >
          {item[nameProperty]}
        </li>
      ))}
    </ul>
  )
}
