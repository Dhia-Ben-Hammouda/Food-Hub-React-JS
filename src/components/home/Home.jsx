import React from "react";
import img from "./burger.png";
import Button from "../button/Button";
import "../styles.css"

const Home = ()=>{
  return(
    <section id="home">
      <div className="container">
        <div className="wrapper">
          <h1>Everything tastes good when you're hungry !</h1>
          <h3>Feel free to pick and try our delicious food recipes</h3>
          <Button value="See Recipes" />
        </div>

        <img src={img} width="250" height="250" />
      </div>
    </section>
  );
}

export default Home;