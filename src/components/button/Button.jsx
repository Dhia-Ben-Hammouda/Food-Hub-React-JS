import React from "react";
import "../styles.css";

const Button = (props)=>{
  return(
    <button>
      {props.value}
    </button>
  );
}

export default Button;