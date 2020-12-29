const Like = ({liked, onToggleLike}) => {
  return (
    <>
      <i className={`fa${liked ? 's' : 'r'} fa-heart`}
      style={{cursor: "pointer", fontSize: 20}}
      onClick={onToggleLike} /> 
    </>
  )
}

export default Like
