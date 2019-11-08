import React, { useEffect, useState } from 'react';
import axios from "axios";

function Container(){
const [wars, setWars] = React.useState([])
    useEffect(() => {
        axios
          .get("https://swapi.co/documentation#people")
          .then(response => {
            console.log(response);
            setWars(response.data)

          })
          .catch(error => {
            console.log(`This is an error`);
          });
      }, []);
    return(
        <h2>React is our game</h2>
    )
}

export default Container