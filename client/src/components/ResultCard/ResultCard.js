import React, {useCallback} from "react"
import  "./ResultCard.scss"
import {useHistory} from 'react-router-dom';

const ResultCard = ({item, name}) => {

  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(`/${category}/${name}`), [history]);

  let category

  if (item.height){
    category = "People";
  } else if(item.rotation_period){
    category= "Planets";
  } else if(item.title){
    category= "Films";
  } else if(item.classification){
    category= "Species";
  } else if(item.vehicle_class){
    category= "Vehicles";
  } else if(item.starship_class){
    category= "Starships";
  } else{
    category= "Unknown";
  }


  return (
    <div className="resultCard" onClick={handleOnClick}>
      <span className="resultCard-category">{category}</span>
      <h4 className="resultCard-name">{name}</h4>
    </div>
  );
}
 
export default ResultCard;