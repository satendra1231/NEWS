import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopHeadline = () => {
    const [headline, setheadline] = useState([]);
    let getData=async()=>{
        let res=await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=e515eb2c578e4cd8a233126a9fdbbdaf`)
        // console.log(res.data.articles)
        setheadline(res.data.articles)
    }
    useEffect(()=>{
        getData()
      },[])
  return (
    <div>
        {headline.map((ele)=>{
            return  <h5 key={ele.title} className='mb-5'><Link className='text-white' to={ele.url}>{ele.title}</Link></h5>
        })}
      
    </div>
  )
}

export default TopHeadline
