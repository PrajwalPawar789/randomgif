import React, {useState, useEffect} from 'react'
import axios from 'axios';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  
  const [gif, setGif] = useState('');

  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);

  }

  useEffect( () => {
    fetchData();
  },[])
  
  function clickHandler() {
    fetchData();
  }
  
  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex
    flex-col items-center gap-y-5 mt-[30px]">
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">A Random Gif</h1>
      
      <img src={gif} alt="img" width="450px"/>  
      
      <button onClick={clickHandler}
      className="w-10/12 bg-white mb-[20px] opacity-70 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  )
}

export default Random