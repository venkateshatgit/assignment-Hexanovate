import IndividualData from "../individualData/individualData";
import './showData.css'

function ShowData({data}) {
    return ( 
        <div className="showData">
            <ul>
                {
                    data.map((item, index) => {
                        return <li key={index}><IndividualData item={item} /> </li>
                    })
                }
            </ul>
        </div>
    );
}

export default ShowData;