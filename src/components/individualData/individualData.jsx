import {useState} from 'react'
import './individualData.css'

function IndividualData({item}) {

    const [liked, setLiked] = useState(false)

    const changeColor = () => {
        setLiked(!liked)
    }
    return (  
        <div className="individulaData">
            <img src={item.poster} />
            <h3>{item.title}</h3>
            <p>{item.genre}</p>
            <p>{item.imdbRating}</p>
            <p>{item.dVD}</p>
            <div classname="heart" style={{color: `${liked ? 'red': '#fff'}`}} onClick={changeColor} >
                ❤
            </div>
        </div>
    );
}

export default IndividualData;