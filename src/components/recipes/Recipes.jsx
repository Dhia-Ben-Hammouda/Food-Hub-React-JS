import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";
import Item from "../item/Item";

const Recipes = ()=>{

  const [Rec , setRec] = useState([]);

  useEffect( ()=>{
    axios.get("https://food-hub-react-js.herokuapp.com/foodApi")
    .then( (response)=>{
      setRec(response.data);
    })
  } , []);

  return(
    <section id="recipes">
      <div className="recipes-grid">
        {
          Rec.map( (recipe,index,arr)=>{
            return <Item key={index} duration={recipe.duration} name={recipe.name} url={recipe.url}   />
          })
        }
      </div>
    </section>
  );
}

export default Recipes;