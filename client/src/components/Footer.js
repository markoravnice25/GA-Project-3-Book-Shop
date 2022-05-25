import react from 'react'
import facebook from './../images/facebook.png'
import instagram from './../images/instagram.png'
import twitter from './../images/twitter.png'


const Footer = () => {


  return (
    // <footer className='fixed-bottom'>
    <section className='icon-display'>
      <p>FOLLOW US</p>
      <div className='icon'>
        <a className="nav-item nav-link facebook" href="#"> <img src={facebook} /></a>
        
        <a className="nav-item nav-link twitter" href="#"> <img src={twitter} /></a>
        <a className="nav-item nav-link instagram" href="#"> <img src={instagram} /></a>
      </div>
      © Project3, 25May2022. Marko-Yuanmeng-Riccardo♥️. 
    </section>






  // </footer>
  )
}

export default Footer