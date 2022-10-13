import React from 'react'
import style from '../styles/globals.css'
const Card = (props) => {
  return (
    <div
      className="m-5 p-1 w-[200px] h-[150px] shadow-lg rounded-lg flex flex-col items-center cursor-pointer hover:shadow-2xl transition-all
        bg-pink-50 bg-clip-padding backdrop-filter bg-opacity-30 hover:scale-110
        hover:bg-gradient-to-r from-yellow-300 to-red-500 hover:text-gray-100"
    >
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id + 1}.png`} alt=""></img>
      {props.name}
    </div>
  )
}

export default Card
