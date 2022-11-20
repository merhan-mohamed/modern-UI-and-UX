import React, {useState} from 'react';
import "./Navbar.css" ;
import logo from "../../assets/GPT-3.png";
import {RiCloseLine, RiMenu3Line} from "react-icons/ri"


const Menu = () => (
<>
<p><a href="#home">Home</a></p>
<p><a href="#wgpt3">What is GPT</a></p>
<p><a href="#possibilities">Open AI</a></p>
<p><a href="#feature">Case Studies</a></p>
<p><a href="#blog">Library</a></p>
</>
)

const Navbar = () => {
  const [toggleMenu, SettoggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
          <div className="gpt3__navbar-links_container">
           <Menu />
          </div>
         
      </div>
      <div className="gpt3__navbar-sign">
          <p>Sign up</p>
          <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ?  <RiCloseLine color='#fff' font={27} onClick={()=> SettoggleMenu(false)}/>  
        : <RiMenu3Line color="#fff" font={27} onClick={() => SettoggleMenu(true)}/>}

        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign up</p>
                <button type='button'>Sign up</button>
            </div>
            </div>
            
          </div>
        )}

      </div>
      </div>
      
  )
}

export default Navbar
