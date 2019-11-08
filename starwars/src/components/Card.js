import React from "react";
import styled from "styled-components";

const Name = styled.h3`
  font-size: 20px;
  color: red;
  font-weight: bold;
  & span {
    font-weight: normal;
    font-size: 18px;
    color: black;
  }
`;

const Skin = styled.p`
  color: blue;
  font-size: 20px;
  font-weight: bold;
  & span {
    font-size: 18px;
    color: black;
    font-weight: normal;
  }
`;

const Hair = styled.p`
color: teal;
font-size: 20px;
font-weight: bold

& span{
    font-size: 18px;
    color: black;
    font-weight: normal;
}`

const Height = styled.p`
color: brown;
font-size: 20px;
font-weight: bold

& span{
    font-size: 18px;
    color: black;
    font-weight: normal;
}`

const Mass = styled.p`
color: green;
font-size: 20px;
font-weight: bold;
margin-bottom: 70px;

& span{
    font-size: 18px;
    color: black;
    font-weight: normal;
}`

const Border = styled.div`
border: 1px solid black;
width: 40%;
background-color: white;
margin-top: 30px;`

function Card(props) {
  return (
    <div>
    <Border>
      <Name>
        <span>I am</span> {props.name}
      </Name>
      <Skin>
        <span>I have a</span> {props.skin_color} <span>skin</span>
      </Skin>
      <Hair>
        <span>My hair has a wonderful</span> {props.hair_color} <span>color</span>
      </Hair>
      <Height><span>I am not particulary tall, i measure </span>{props.height} <span>in height</span></Height>
      <Mass><span>I have a body weight of</span> {props.mass}kg</Mass>
      </Border>
    </div>
  );
}

export default Card;
