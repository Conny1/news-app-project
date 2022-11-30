import React, { useState } from 'react'
import  './about.css'
import { BsFacebook,BsLinkedin, BsInstagram ,BsGoogle} from "react-icons/bs";

const About = () => {
  

  
  return (
    <div className='about'>
      <div className='whoArewe' >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus id obcaecati similique ab laborum perferendis alias voluptate quibusdam eaque soluta necessitatibus enim iusto, vel delectus hic unde et earum minus consequuntur consectetur laudantium saepe magni blanditiis? Hic, nostrum ab. </p>
      </div>
     
      <div className='contacts' >
        <div className='socials'>
          <a href="https://www.facebook.com/home.php"><BsFacebook/> </a>
          <a href="https://www.instagram.com/"> <BsInstagram/> </a>
          <a href="https://www.linkedin.com/ " ><BsLinkedin/></a>
        </div>
        <div className='nums' >
          <p>Tell: +254 727 0423 34</p>
          <a href="mailto:Joelconrad277@gmail.com"><BsGoogle/> mail</a>
        </div>
      </div>
    </div>
    
  )
}

export default About
