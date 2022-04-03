import React from "react";
import "../styles.css";

const Item = (props)=>{
  return(
    <div className="item">
      <img src={props.url} style={ {width:"100%" , height:"60%" } } />
      <div>
        <h3>{props.name}</h3> 
        <h4>{props.duration} min</h4> 
      </div>
    </div>
  );
}

export default Item;