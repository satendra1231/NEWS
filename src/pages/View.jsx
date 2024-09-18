import React, { useContext } from 'react'
 import NewsContext from '../context/NewsContext'
import { useLocation } from 'react-router-dom'

const View = () => {
  let ctx=useContext(NewsContext)
  // console.log(ctx)

  let view=useLocation()
  // console.log(view.state)
  
  return (
    <div className='row m-0 p-0 view 'style={{marginTop:"80px"}}>
      <h1>{view.state.title}</h1>
      <h5>{view.state.publishedAt}</h5>
      <div><img src={view.state.urlToImage} alt="" /></div>
      <h3>Author : {view.state.author}</h3>
      <p>{view.state.description}</p>
      <p>{view.state.content}</p>
     
    </div>
  )
}

export default View
