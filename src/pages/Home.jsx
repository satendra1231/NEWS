import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TopHeadline from '../component/TopHeadline';
import Pagination from '../component/Pagination';
import NewsContext from '../context/NewsContext';

const Home = (props) => {
  let ctx=useContext(NewsContext)
  // console.log(ctx)
  const [currentPage, setcurrentPage] = useState(1);

  const [allProduct, setallProduct] = useState([]);
  // console.log(allProduct)

  let getdata=async()=>{
    let ans=await fetch(`https://newsapi.org/v2/everything?q=${ctx.News}&apiKey=1c87f3b87f944c35974105d610c48948`);
    let data=await ans.json();
    console.log(data.articles)
    setallProduct(data.articles)
  }
  
  useEffect(()=>{
    getdata()
  },[ctx.News])
  let itemperpage=9
  let lastIndex=itemperpage*currentPage
  let firstIndex=lastIndex-itemperpage

  let slicedarr=allProduct.slice(firstIndex,lastIndex)
  // console.log(slicedarr)
  
  return (
   <div className="row m-0 p-0 side" >
    <div className="col-md-9  leftside" >
    <div className='row  justify-content-center gap-3 m-auto'>
      {slicedarr.map((ele)=>{
        return <>
         {ele.urlToImage && <div  className="card" style={{width: '18rem'}}>
  <img src={ele.urlToImage} className="card-img-top" alt="..." />
  <div className="card-body">
    <h4 className="card-title">{ele.title}</h4>
     <h6 className="card-text">Author : {ele.author}</h6>
    <p>Published : {ele.publishedAt}</p>
   
  </div>
  <div>
    <Link state={ele} to="/View" className="btn btn-primary p-2 ms-5 mb-3">View news</Link>
  </div>
</div>}
        </>

      })}
    </div>
    <Pagination allproduct={allProduct} itemperpage={itemperpage} currentPage={currentPage} setcurrentPage={setcurrentPage}/>
    </div>
    <div className="col-md-3 mb-2 rightside">
     <h3 className='headlineTitle bg-warning text-center p-2 mb-3'>Top Headlines</h3>
     <div className='topheadlinecontainer mt-5' >
     <TopHeadline/>
     </div>
    </div>

   </div>
  )
}

export default Home