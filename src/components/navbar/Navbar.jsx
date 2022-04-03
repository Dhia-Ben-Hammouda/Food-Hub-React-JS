import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles.css";
import img from "./burger.png";

const Navbar = ()=>{

  const clickHandler = ()=>{
    document.querySelector(".bars").classList.toggle("rotated");
    document.querySelector(".mobile-list").classList.toggle("opened");
    document.querySelector(".mobile-list").classList.toggle("closed");
    document.querySelector("li").classList.toggle("invisible");
  }

  return(
    <nav>
      <div className="website">
        <div style={ {display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column"} }>
          <div>Food</div>
          <div>Hub</div>
        </div>
        <img src={ img } width="40"/>
      </div>

      <ul className="nav-list" >
        <li>
          <Link smooth to="#home">
            Home
          </Link>
        </li>

        <li>
          <Link smooth to="#recipes">
            Recipes
          </Link>
        </li>

        <li>
          <Link smooth to="#contact">
            Contact
          </Link>
        </li>

      </ul>

      <ul className="mobile-list closed" >
        <li className="invisible">
          <Link smooth to="#home">
            Home
          </Link>
        </li>

        <li className="invisible">
          <Link smooth to="#recipes">
            Recipes
          </Link>
        </li>

        <li className="invisible">
          <Link smooth to="#contact">
            Contact
          </Link>
        </li>

      </ul>

      <div onClick={ clickHandler } className="bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;