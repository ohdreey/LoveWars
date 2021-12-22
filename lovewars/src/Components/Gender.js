import {useState, useEffect } from "react"

import "./Gender.css" 

import venus from "../images/venus.png"
import mars from "../images/mars.png"
import venusMars from "../images/venusMars.png"
import droid from "../images/droid.png"
import wallpaper from "../images/wallpaper.jpg"



const Gender = () => {
	const [characters, setCharacters] = useState([])
	const [selectedCharacters, setSelectedCharacters] = useState([])
	
	useEffect(() => {
		const getData = () => {
			fetch("https://miadil.github.io/starwars-api/api/all.json")
				.then((res) => res.json())
				.then((res) => console.log(res) || setCharacters(res) || setSelectedCharacters(res))
		}
		getData()
	}, [])

const handleClick = (param) => {
	console.log(param)
	if (param === 'all') {
		setSelectedCharacters(characters)

	} else if (param === 'droid'){
		let selected = characters.filter((character) => (character.species === param))
			setSelectedCharacters(selected)
	} else {
		let selected = characters.filter((character) => (character.gender === param))
		setSelectedCharacters(selected)
	}
}

return (
	<div>
      
		    <button onClick={() => handleClick('male')}><img className="genderImages" src={mars} alt="mars"/></button>
		   
			<button onClick={() => handleClick('female')}><img className="genderImages" src={venus} alt="venus"/></button>
		    <button onClick={() => handleClick('droid')}><img className="genderImages" src={droid} alt="droid"/></button>
		    <button onClick={() => handleClick('all')}><img className="genderImages" src={venusMars} alt="venus"/></button>
 
		{
			selectedCharacters.map(character => {
			return <div key={character.id}>
				<p>{character.name}</p>
				<img className='card-img' src={character.image} alt={character.name} />
			</div>
		})
		}

		</div>
	)
}

export default Gender
