import React, { useEffect, useState } from "react"
import  "./SearchPage.scss"
import ResultCard from "../../components/ResultCard/ResultCard"

const SearchPage = ({data}) => {

  const [searchData, setSearchData] = useState(data);

  let filterData = (e) => {
    const filteredData = data.filter(item => {
      if (item.name) {
        if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
          return true
        }
      } else if (item.title){
        if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
          return true
        }
      }
    })
    setSearchData(filteredData)
  }

  return (
    <>
      {!data ? 
        <p className="Search-Loading">Loading...</p> 
      : 
      <>
        <div className="Search-Header">
          <h1 className="Search-Header--title">Star Wars - Empire Database</h1>
          <input 
            className="Search-Header--input" 
            placeholder="Search here..." 
            type="text"
            onChange={filterData}
          />
        </div>
        <div className="Search-Results">
        {searchData ?
          searchData.map((item, i)=>
            <ResultCard key={i} item={item} name={item.name ? item.name : item.title } />
          )
          :
          data.map((item, i)=>
            <ResultCard key={i} item={item} name={item.name ? item.name : item.title } />
          )
        }
        </div>
      </>
      }
    </>
  );
}
 
export default SearchPage;