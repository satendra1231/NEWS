import React, { useContext, useEffect, useState } from 'react'
import NewsContext from './NewsContext'

const NewsState = (props) => {
 
  const [News, setNews] = useState("world");

  // const viewBtn=(ele)=>{
  //   console.log("hello")
  // }
   
  
  return (
  
    <NewsContext.Provider value={{News,setNews}}>
      {props.children}
    </NewsContext.Provider>
  )
}

export default NewsState
