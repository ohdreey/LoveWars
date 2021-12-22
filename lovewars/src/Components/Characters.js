import {useState, useEffect } from "react"
import Card from '../Components/Card';
import "./Characters.css"

const Characters = () => {
  const [characters, setCharacters] = useState(null); // etat que stock les datas
  const [random, setRandom] = useState(Math.floor(Math.random() * 88))

  useEffect(()=> {
    const getData = () => {
      fetch('https://miadil.github.io/starwars-api/api/all.json')
      .then((res) => res.json())
      .then((res) => setCharacters(res))  
    }
    getData()
  }, [])

  return (
    <div>
      
      <div className="GaleryCharacters">
        { characters != null &&
        <Card 
        key={characters[random].id}
        id={characters[random].id} 
        name={characters[random].name}  
        image={characters[random].image} 
        species={characters[random].species}
        random={random}
        setRandom={setRandom}
        />
        }
      </div>
    </div>
  )}
export default Characters
