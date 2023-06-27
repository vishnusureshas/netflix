import React,{useState,useEffect} from 'react'
import './Nav.css';

function Nav() {

  const [show,handleShow] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>500){
        handleShow(true)
      }
      else{
        handleShow(false)
      }
    })
  },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='logo'
        src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'
        />
    </div>
  )
}

export default Nav