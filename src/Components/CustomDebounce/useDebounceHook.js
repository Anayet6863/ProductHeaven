import { useEffect, useState } from "react"

 const useDebounce = (value,delay)=>{
   
    const [updateValue,setUpdateValue] = useState(value)
   // console.log(value,delay);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setUpdateValue(value)
            console.log(updateValue);
        },delay);
        return ()=>{
            clearTimeout(timer);
        };


    },[value]);
    return updateValue;
}

export default useDebounce;

