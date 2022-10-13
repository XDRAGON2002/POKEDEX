import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
import style from '../styles/card.module.css'

const CardList = () => {
  const [arr, setArr] = useState([])
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const getData = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
    const newArr = res.data.results.map((item, index) => res.data.results[index].name.toUpperCase())
    setArr(newArr)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-red-500 to-yellow-300 h-full min-h-screen">
      <h1 className="text-5xl font-mono p-5 font-extrabol z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500">POKEDEX</h1>

      <div className="relative flex flex-row justify-start items-center mb-5">
        <input className="bg-gradient-to-r from-purple-50 to-pink-50 font-thin rounded-md w-[20rem] h-8 pr-4 pl-8
        hover:from-purple-100 hover:to-pink-100" type="search" onChange={handleSearch} value={search} placeholder="Search..." />

        <img className="absolute left-2 w-5 cursor-pointer hover:scale-[120%] transition-all" src="./searchicon.svg" alt="pokemon" />
      </div>

      <div className="flex flex-wrap flex-row w-[90vw] items-center justify-center">
        {arr.map((item, index) => {
          return <div>{item.toUpperCase().includes(search.toUpperCase()) && <Card id={index} name={item} key={index} />}</div>
        })}
      </div>
    </div>
  )
}

export default CardList
