import {useState, useEffect } from "react"
import "./Gender.css" 

import venus from "../Images/venus.png"
import mars from "../Images/mars.png"
import venusMars from "../Images/venusMars.png"
import droid from "../Images/droid.png"
import CardHome from './CardHome'

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
	<div className="globalGender">
		<div className="ButtonGender">
    	<button className='btnGender' onClick={() => handleClick('male')}><img className="genderImages" src={mars} alt="mars"/></button> 
			<button className='btnGender' onClick={() => handleClick('female')}><img className="genderImages" src={venus} alt="venus"/></button>
			<button className='btnGender' onClick={() => handleClick('droid')}><img className="genderImages" src={droid} alt="droid" /></button>
			<button className='btnGender' onClick={() => handleClick('all')}><img className="genderImages" src={venusMars} alt="venus" /></button>
		</div>
		<div className="globalCardGender">
			{
			selectedCharacters.map(character => {
			return ( <CardHome 
        key={character.id}
        id={character.id} 
        name={character.name}  
        image={character.image} 
        species={character.species}
        />) 
			// <div key={character.id}>
			// 	<p>{character.name}</p>
			// 	<img className='card-img' src={character.image} alt={character.name} />
			// </div>
			})
		}
		</div>
	</div>
	)
}

export default Gender
