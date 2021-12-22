import "./Card.css"
import "./button.css"
import heart_027 from '../assets/heart_027.jpg'
import button from "./button"
const Card = ({name, image, id, species, button, random, setRandom}) => {
  return (
  <div className='card'>
    <img className="Cardimg" src={image} alt={name}/>
    <p>{name}</p>
    <p>{species}</p>
    <div>
      <button onClick={() => setRandom(Math.floor(Math.random() * 88))}>DISLIKE</button>
      <button onClick={() => setRandom(Math.floor(Math.random() * 88))}>LIKE</button>
    </div>
  </div>
  )
}

export default Card