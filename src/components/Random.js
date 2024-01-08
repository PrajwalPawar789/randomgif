import React, {useState, useEffect} from 'react'
// import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {
  
  const {fetchData, loading, gif} = useGif();
  
  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex
    flex-col items-center gap-y-5 mt-[30px]">
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">A Random Gif</h1>
      
      {
        loading ? (<Spinner/>) : (<img src={gif} alt="img" width="450px"/>)
      }
      <button onClick={() => (fetchData)}
      className="w-10/12 bg-white mb-[20px] opacity-70 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  )
}

export default Random