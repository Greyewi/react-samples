import {useState, useCallback, useMemo, memo} from "react";
import useTraceUpdate from '../Hook/Index'

const Item = memo((props) => {
  const {text, onItemClick, data} = props
  useTraceUpdate(props)
  console.log(data)
  return <div onClick={() => onItemClick(text)}>{text}</div>
})

function CallbackList({list}) {
  const [text, setText] = useState('')
  // const handleClick = (data) => { // 0.8, 0.6, 0.6
  //   setText(data)
  // }

  const handleClick = useCallback( (data) => { // 2.2, 0.8, 0.6
    setText(data)
  }, [])

  const dataObject = useMemo(() => ({name: "Petya", age: 5}), [])

  return <>
      {text}
      {list.map(item => <Item key={item.id} text={item.text} onItemClick={handleClick} data={dataObject}/>)}
    </>
}

export default CallbackList