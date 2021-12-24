import "./Card.css"
import "./button.css"
import coeur1 from "../assets/coeur1.jpg"
import croix1 from "../assets/croix1.png"


const Card = ({name, image, id, species, button, random, setRandom}) => {
  return (
  <div className='card' style={{ left: `${id}00%` }}>
    <div className='cardPicture'>
      <img className="cardImg" src={image} alt={name}/>
    </div>
      <p>{name}</p>
      <p>{species}</p>
    <div className='button'>
      <div onClick={() => setRandom(Math.floor(Math.random() * 88))}><img className="choicePictures" src={croix1} alt="coeur" /></div>
      <div onClick={() => setRandom(Math.floor(Math.random() * 88))}><img className="choicePictures" src ={coeur1} alt="croix" /></div>
    </div>
  </div>
  )
  }

export default Card