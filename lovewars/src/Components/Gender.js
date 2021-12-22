import {useState, useEffect } from "react"

import "./Gender.css" 



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
		<button onClick={() => handleClick('male')}>Male</button>
		<button onClick={() => handleClick('female')}>Female</button>
		<button onClick={() => handleClick('droid')}>Droid</button>
		<button onClick={() => handleClick('all')}>All</button>
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
