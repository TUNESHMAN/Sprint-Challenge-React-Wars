import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Container() {
  const [wars, setWars] = React.useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setWars(response.data.results);
      })
      .catch(error => {
        console.log(`This is an error`);
      });
  }, []);
  return (
    <div>
      {wars.map((element, index) => {
        return (
          <Card
            key={index}
            name={element.name}
            height={element.height}
            mass={element.mass}
            skin_color={element.skin_color}
          />
        );
      })}
    </div>
  );
}

export default Container;
