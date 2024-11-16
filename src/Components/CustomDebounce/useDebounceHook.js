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
// import { useState, useEffect } from "react";

// function useDebounce(value, delay) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler); // Clear the timeout if value changes or component unmounts
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }

// export default useDebounce;
