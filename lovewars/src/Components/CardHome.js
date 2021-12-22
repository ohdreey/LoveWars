import "./Card.css"
import "./button.css"
import button from "./button"
const Card = ({name, image, id, species, button}) => {
  return (
  <div className='card homeCard'>
    <img className="Cardimg" src={image} alt={name}/>
    <p className="pCard">{name}</p>
    <p className="pCard">{species}</p>
</div>
  )
}

export default Card