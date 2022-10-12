import React,{ useState,useEffect } from "react"
import axios from "axios"
import Card from "./Card"
import style from "../styles/card.module.css"

const CardList = () => {

    const [arr,setArr] = useState([])
    const [search,setSearch] = useState("")

    const handleSearch = (e) => {

        setSearch(e.target.value)
    }

    const getData = async () => {

        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
        const newArr = res.data.results.map((item,index) => (
            res.data.results[index].name.toUpperCase()
        ))
        setArr(newArr)
    }
    useEffect(() => {
        getData()
    },[])
    
    return (
        <div className={style.container}>
            <h1>
                POKEDEX
            </h1>
            <input type = "search" onChange = {handleSearch} value = {search}></input>
            <div className={style.card_list}>
            {arr.map((item,index) => {
                return (
                    <div>
                        {item.toUpperCase().includes(search.toUpperCase()) &&
                        <Card id = {index} name = {item} key = {index}/>}
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default CardList