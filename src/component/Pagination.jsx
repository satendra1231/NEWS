import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = (props) => {
    let noOfButton=Math.ceil(props.allproduct.length/props.itemperpage)
    let buttonArr=[...Array(noOfButton+1).keys()].slice(1)
    // console.log(buttonArr)
    
    const handlePreve=()=>{
        if(props.currentPage>1){
            props.setcurrentPage(props.currentPage-1)
        }
    }
    const handleNext=()=>{
        if(props.currentPage<props.allproduct.length+1){
        props.setcurrentPage(props.currentPage+1)
        }
    }
  return (
    <div>
        <nav aria-label="Page navigation example" >
  <ul className="pagination mt-2 flex-wrap">
    <li onClick={handlePreve} className="page-item"><Link className="page-link" to="#">Previous</Link></li>

   {
    buttonArr.map((ele)=>{
     return  <li key={ele.descripation} onClick={()=>props.setcurrentPage(ele)} className={ele===props.currentPage?"page-item active":"page-item"}><Link className="page-link" to="#">{ele}</Link></li>
    })
   }
    <li onClick={handleNext} className="page-item"><Link className="page-link" to="#">Next</Link></li>
  </ul>
</nav> 
      
    </div>
  )
}

export default Pagination
