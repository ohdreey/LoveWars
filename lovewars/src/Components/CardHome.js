import "./Card.css"
import "./button.css"

import button from "./button"
const Card = ({name, image, id, species, button}) => {
  return (
  <div className='card homeCard'>
    <img className="Cardimg" src={image} alt={name}/>
    <p>{name}</p>
    <p>{species}</p>
</div>
  )
}

export default Card