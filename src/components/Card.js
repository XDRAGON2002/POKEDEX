import React from "react"

const Card = (props) => {

    return (
        <div>
            {props.name}
            <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id + 1}.png`} alt = ""></img>
        </div>
    )
}

export default Card