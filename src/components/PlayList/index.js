import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const PlayList = props => {
  const {data, onDelete} = props
  const {id, imageUrl, name, genre, duration} = data

  const oClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="list">
      <div className="img-container">
        <img src={imageUrl} alt="track" className="image" />
        <div className="name-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="time-container">
        <p className="duration">{duration}</p>
        <button className="delete-btn" type="button" onClick={oClickDelete}>
          <AiOutlineDelete color="white" />
        </button>
      </div>
    </li>
  )
}

export default PlayList
