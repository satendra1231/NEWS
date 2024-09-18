import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import NewsContext from '../context/NewsContext'

const Navbar = () => {
  let ctx=useContext(NewsContext)
  console.log(ctx)
  const handleClick=(ans)=>{
    // console.log(ans)
    ctx.setNews(ans)
  }
  const [item, setitem] = useState("");
  const handleChanger=(e)=>{
    let value=e.target.value
    // console.log(value)

    setitem(value)
  }
  const HandleSearch=(e)=>{
    e.preventDefault()
    ctx.setNews(item)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav fixed-top mb-5">
  <div className="container-fluid mb-1">
    <Link className="navbar-brand text-white" to="/">Samachar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">World</Link>
        </li>
        <li onClick={()=>handleClick("Sports")} className="nav-item">
          <Link className="nav-link text-white" to="/">Sports</Link>
        </li>
        <li onClick={()=>handleClick("Politics")} className="nav-item">
          <Link className="nav-link text-white" to="/">Politics</Link>
        </li>
        <li onClick={()=>handleClick("Finance")} className="nav-item">
          <Link className="nav-link text-white" to="/">Finance</Link>
        </li>
        <li onClick={()=>handleClick("Entertainment")} className="nav-item">
          <Link className="nav-link text-white" to="/">Entertainment</Link>
        </li>
        <li onClick={()=>handleClick("Defence")} className="nav-item">
          <Link className="nav-link text-white" to="/">Defence</Link>
        </li>
    
      </ul>
      <form className="d-flex" role="search">
        <input onChange={handleChanger} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={HandleSearch} className="btn btn-outline-success active" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
