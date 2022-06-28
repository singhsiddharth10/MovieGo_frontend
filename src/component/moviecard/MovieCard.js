import img from '../../assets/KGF.jpg'
import addImg from '../../assets/add.png'
import '../moviecard/moviecardstyle.css'
import {  useNavigate} from 'react-router-dom';

export default function MovieCard(props) {
  const navigate =  useNavigate ();
  console.log("moviecard",props.userName)
  return (
    <div className="column">
      <div className="card">
        <img src={props.data.imgSrc} id="image"></img>
        <button style={{backgroundColor : "#1B2430", border : "0px"}} onClick={()=> navigate("/MovieDetails",{state :  props})}>
          <span className='explore_title'>Explore</span>
        </button>
      </div>
    </div>
  )
}
