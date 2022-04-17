import {useState, useMemo, useCallback} from "react";

const MemoComponent = ({text}) => {
  const [myText, setMyText] = useState(text)

  // const handleClick = useCallback((targetText) => { // 0.9, 0.3, 0.3, 0.5
  //   setMyText(prev => prev + targetText)
  // }, [])

  const handleClick = useMemo(() => () => { // 1.6, 0.2, 0.5, 0.5
    setMyText(prev => prev + myText)
  }, [])

  return <div onClick={() => handleClick(myText)}>{myText}</div>
}

export default MemoComponent