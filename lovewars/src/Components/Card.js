import "./Card.css"
import "./button.css"

import coeur1 from '../assets/coeur1.png'
import croix1 from "../assets/croix1.png"
import button from "./button"
const Card = ({name, image, id, species, button, random, setRandom}) => {
  return (
  <div className='card'>
    <img className="Cardimg" src={image} alt={name}/>
    <p className="pCard">{name}</p>
    <p className="pCard">{species}</p>  
    <div className='button'>
      <div onClick={() => setRandom(Math.floor(Math.random() * 88))}><img className="choicePictures" src={croix1} alt="coeur" /></div>
      <div onClick={() => setRandom(Math.floor(Math.random() * 88))}><img className="choicePictures" src ={coeur1} alt="croix" /></div>
    </div>
  </div>
  )
}

export default Card