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
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-mono p-5 font-bold text-gray-700">
                POKEDEX
            </h1>
            <input className="bg-gray-200 font-thin rounded-md mb-5 w-[20rem] h-8 px-4 hover:bg-gray-300 transition-all" type = "search" onChange = {handleSearch} value = {search} placeholder="Search..."></input>

            <div className="flex flex-wrap flex-row w-[90vw] items-center justify-center">
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