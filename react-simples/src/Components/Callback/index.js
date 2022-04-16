import {useCallback} from "react";

const Callback = ({text}) => {
  const handleClick = useCallback(() => {
    console.log(text)
  }, [text])

  // const handleClick = () => {
  //   console.log(text)
  // }

  return <div onClick={handleClick}>{text}</div>
}

export default Callback