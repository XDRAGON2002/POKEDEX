import React from "react"
import style from "../styles/card.module.css"
const Card = (props) => {

    return (
        <div className={style.card}>
            {props.name}
            <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id + 1}.png`} alt = ""></img>
        </div>
    )
}

export default Card