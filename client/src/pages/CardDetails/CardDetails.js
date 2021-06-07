import React from "react"
import { Link } from "react-router-dom";
import  "./CardDetails.scss"

const CardDetails = (props) => {

  let urlId = props.match.params.name
  let category = props.match.params.category
  let data = props.data

  let filteredData
  let itemData = []

  let filterData = () => {
    filteredData = data.filter(item => {
      if (item.name) {
        if (item.name.toLowerCase() === urlId.toLowerCase()) {
          return true
        }
      } else if (item.title){
        if (item.title.toLowerCase() === urlId.toLowerCase()) {
          return true
        }
      }
    })
  }

  if(data){
    filterData()
  }

  if(filteredData){
    switch(category){
      case "People" : 
        itemData = [
          {title:"Name", value: filteredData[0].name},
          {title:"Height", value: filteredData[0].height},
          {title:"Mass", value: filteredData[0].mass},
          {title:"Hair color", value: filteredData[0].hair_color},
          {title:"Skin color", value: filteredData[0].skin_color},
          {title:"Eye color", value: filteredData[0].eye_color},
          {title:"Birth year", value: filteredData[0].birth_year},
          {title:"Gender", value: filteredData[0].gender}
        ];
        break
      case "Planets" : 
        itemData = [
          {title: "Name", value: filteredData[0].name},
          {title: "Gravity", value: filteredData[0].gravity},
          {title: "Climate", value: filteredData[0].climate},
          {title: "Terrain", value: filteredData[0].terrain},
          {title: "Population", value: filteredData[0].population},
          {title: "Surface water", value: filteredData[0].surface_water},
          {title: "Eye_colors", value: filteredData[0].rotation_period},
          {title: "Diameter", value: filteredData[0].diameter},
          {title: "Orbital period", value: filteredData[0].orbital_period}
        ];
        break
      case "Films" : 
        itemData = [
          {title: "Title", value: filteredData[0].title},
          {title: "Number", value: filteredData[0].episode_id},
          {title: "Director", value: filteredData[0].director},
          {title: "Producer", value: filteredData[0].producer},
          {title: "Release date", value: filteredData[0].release_date}
        ];
        break
      case "Species" : 
        itemData = [
          {title: "Name", value: filteredData[0].name},
          {title: "Classification", value: filteredData[0].classification},
          {title: "Designation", value: filteredData[0].designation},
          {title: "Average height", value: filteredData[0].average_height},
          {title: "Skin colors", value: filteredData[0].skin_colors},
          {title: "Hair colors", value: filteredData[0].hair_colors},
          {title: "Eye colors", value: filteredData[0].rotation_period},
          {title: "Average lifespan", value: filteredData[0].average_lifespan},
          {title: "Language", value: filteredData[0].language}
        ];
        break
      case "Vehicles" : 
        itemData = [
          {title: "Name", value: filteredData[0].name},
          {title: "Model", value: filteredData[0].model},
          {title: "Manufacturer", value: filteredData[0].manufacturer},
          {title: "Cost in credits", value: filteredData[0].cost_in_credits},
          {title: "Length", value: filteredData[0].length},
          {title: "Max atmosphering speed", value: filteredData[0].max_atmosphering_speed},
          {title: "Crew", value: filteredData[0].crew},
          {title: "Passengers", value: filteredData[0].passengers},
          {title: "Cargo capacity", value: filteredData[0].cargo_capacity},
          {title: "Consumables", value: filteredData[0].consumables},
          {title: "Vehicle class", value: filteredData[0].vehicle_class}
        ];
        break
      case "Starships" : 
        itemData = [
          {title: "Name", value: filteredData[0].name},
          {title: "Model", value: filteredData[0].model},
          {title: "Manufacturer", value: filteredData[0].manufacturer},
          {title: "Cost in credits", value: filteredData[0].cost_in_credits},
          {title: "Length", value: filteredData[0].length},
          {title: "Max atmosphering speed", value: filteredData[0].max_atmosphering_speed},
          {title: "Crew", value: filteredData[0].crew},
          {title: "Passengers", value: filteredData[0].passengers},
          {title: "Cargo capacity", value: filteredData[0].cargo_capacity},
          {title: "Consumables", value: filteredData[0].consumables},
          {title: "Starship class", value: filteredData[0].starship_class}
        ];
        break
  
    }
  }

  return (
    <>
      <div className="Search-Header">
        <h1 className="Search-Header--title">Star Wars - Empire Database</h1>
        <Link className="Search-Header--button" to="/" >Return</Link>
      </div>
      <div className="CardDetails-Description">
        {itemData.map((item, i) => 
          <div key={i} className="CardDetails-Description-line">
            <span className="CardDetails-Description-text">{item.title} :</span>
            <span className="CardDetails-Description-text">{item.value}</span>
          </div>
        )}
      </div>
    </>
  );
}
 
export default CardDetails;