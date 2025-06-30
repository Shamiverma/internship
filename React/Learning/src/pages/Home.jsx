import { useEffect, useState } from 'react'
import requests from './netflix.API'
import axios from "axios";

console.log(requests);

const home = () => {
  const [netflixData, setNetflixData] = useState([]);
  console.log(netflixData);

  const getData = () => {
    axios.get(requests.requestPopular).then((res) => setNetflixData(res.data.results)).catch((err) => console.log(err));
  };

useEffect(() => {
  getData()
},[])


  return (
    <>
      {/* <button onClick={getData} className="bg-pink-800 text-white p-2 rounded-2xl m-5">
        Get Data
      </button> */}
      {netflixData.map((elem) => {
        console.log(elem);

        return (
          <>
            <div key={elem.id}>
              <h1>{elem.original_title}</h1>
              <h2>{elem.overview}</h2>
              <img 
              src={`https://image.tmdb.org/t/p/w500/${elem?.backdrop_path}`} alt="image"/>
            </div>

          </>
        )
      })}
    </>
  )
}

export default home

