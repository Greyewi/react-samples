
const Item = ({text, onItemClick}) => {
  return <div onClick={onItemClick}>{text}</div>
}

function CallbackList({list}) {
  const handleClick = (data) => {
    console.log(data)
  }
  return list.map(item => <Item key={item.id} text={item.text} onItemClick={handleClick}/>)
}

export default CallbackList