import {useCallback, useState} from "react";

const Callback = ({text}) => {
  const [myText, useMyText] = useState(text)

  const handleClick = useCallback(() => { // 1.4, 0.2, 0.3, 0.6
    console.log(text)
    useMyText(prev => prev + myText)
  }, [myText])

  // const handleClick = () => { // 1.3, 0.4, 0.3, 0.7
  //   console.log(text)
  //   useMyText(prev => prev + myText)
  // }

  return <div onClick={handleClick}>{myText}</div>
}

export default Callback