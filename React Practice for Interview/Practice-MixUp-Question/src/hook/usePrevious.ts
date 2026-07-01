import { useEffect, useRef } from "react"

const usePrevious=(value)=>{
  const prevRef=useRef(null);

  useEffect(()=>{
    prevRef.current=value
  },[value])


  return prevRef.current;
}

export default usePrevious