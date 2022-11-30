import React, { useEffect, useState } from 'react'
import  './home.css'
import axios from 'axios'
const  url = 'https://current-news.p.rapidapi.com/news'


const Home = () => {
  const [news, setNews]= useState([])
  const [searchNews, setSearchnews] = useState('')
  const [loading, setLoading] = useState(false)
  
  const  url2 = `https://current-news.p.rapidapi.com/news/${searchNews}`
  // getting data from the Api
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3d4d648245mshc0863e3b0caaf09p108d0ejsn122b9d5612ea',
      'X-RapidAPI-Host': 'current-news.p.rapidapi.com'
    }
  };
  const fetchData = async (url)=>{
    let data = await axios.get(url, options)

    // setNews(data);
    
     setNews(data.data.news)
    //  setLoading(!loading)
     
     
  }
 
  useEffect(()=>{
    fetchData(url)

  }, [], [searchNews])
  const searchitem =(category)=>{
  
    setSearchnews(category)
    // setLoading(!loading)
    fetchData(url2)
    // setLoading(!loading)
    
    
    
  }
  const categories = [ 'general','business', 'sports', 'technology', 'entertainment','health' ,'science' ]
 

 
  return (
    <div className='news' >
      <div className='caltegories' >
        {
          categories.map((btn,index)=>{
            return <div key={index} className='btns' > 
            <button onClick={()=>{searchitem(btn)}} >{ btn }</button>
            </div>
          })
        }
      </div>
      {
        news.map((item,index)=>{
          return  <div key={index} className= 'item'  >
            <div className='image' > <img src={item.urlToImage } alt="news image" /> </div>
            <div className='content' > 
            <h2>{item?.title}</h2>
            <p>{item?.content} <a href={item?.url}>ReadMore....</a> </p>
            <p> Published at: {item?.publishedAt}</p>
            <p>source: {item?.source?.name} </p>
            
            
            </div>
            
            
             </div>
        })
      }
    
    </div>
  )
}

export default Home
