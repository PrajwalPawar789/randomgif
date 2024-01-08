import React, {useState} from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

  const [tag, setTag] = useState('car');
  const {fetchData, loading, gif} = useGif(tag);

  function tagHandler(event) {
    setTag(event.target.value);
  }
  
  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex
    flex-col items-center gap-y-5 mt-[30px]">
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">A Random Gif</h1>
      
      {
        loading ? (<Spinner/>) : (<img src={gif} alt="img" width="450px"/>)
      }

      <input className="w-10/12 bg-white mb-[3px] opacity-70 text-lg py-2 rounded-lg text-center" 
        onChange={tagHandler} value={tag}
      />

      <button onClick={(tag) => (fetchData(tag))}
      className="w-10/12 bg-white mb-[20px] opacity-70 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  )
}

export default Random