
import { useEffect, useState } from 'react'
import './App.css'


import quotesData from './assets/quotes.json'
import { FaTwitter } from "react-icons/fa";

function App() {
  const [quotes,setQuotes]=useState()
  const [randomColor,setRandomColor]=useState('green')
  const getRandomColors=()=>{
    const red=Math.floor(Math.random()*128)
    const green=Math.floor(Math.random()*128)
    const blue=Math.floor(Math.random()*128)

    return `rgba(${red},${green},${blue},0.7)`
    

  }
  useEffect(()=>{
    document.body.style.backgroundColor='pink'
    setQuotes(quotesData[0])

  },[])


  const generateNewQuote=()=>{
    const randomIndex=Math.floor((Math.random()*quotesData.length)+1)
    setQuotes(quotesData[randomIndex])
    setRandomColor(getRandomColors())
    document.body.style.backgroundColor=randomColor

  }

 

  const transition ='all 1s'
  

  return (
   <div className='main'style={{transition:transition}}id='quote-box'>
    <div className='quotes-container'>
      <blockquote style={{color:randomColor,fontSize:'1.8rem'}} >""</blockquote>
      <h3 style={{color:randomColor,transition:transition}}id='text'>{quotes?.quote}</h3>
      <i className='author'style={{color:randomColor}}id='author'>-{quotes?.author}</i>
     

    </div>
    <div className='footer'>
      <div className='share-socialMedia'>
        <a style={{backgroundColor:randomColor,color:'white'}}
        className='social-media-links'
        id='tweet-quote'
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quotes?.quote}`}
        target='_blank'><FaTwitter/></a>
        {/* <a style={{backgroundColor:randomColor,color:'white'}}
        className='social-media-links'
        href=''
        id='tweet-quote'
        target='_blank'><FaTumblr size='20'/></a> */}
       

      </div>
      <div className='quote-button'>
        <button onClick={generateNewQuote}style={{backgroundColor:randomColor,color:'white'}}id='new-quote'>New Quote</button>
      </div>
    </div>
   </div>
  )
}

export default App
