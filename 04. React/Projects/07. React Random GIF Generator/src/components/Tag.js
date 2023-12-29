// import axios from "axios";
import React, {useEffect, useState} from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [tag, setTag] = useState('');

    // const [gif, setGif] = useState(''); 
    // const [loading, setLoading] = useState(false);

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false);
    // }
   
    // useEffect(() => {
    //     fetchData();
    // }, []);

    const {gif, loading, fetchData} = useGif(tag);

    return(
        <div className="w-1/2 bg-[rgb(106,175,220)] border border-black rounded-lg flex flex-col items-center gap-y-5 mt-[15px] ">
            <h1 className="text-2xl underline uppercase font-bold mt-[15px]">Random GIF</h1>
            {
                loading ? <Spinner/> :  <img src={gif} width="450" />
            }
            <input className="w-10/12 text-lg py-2 rounded-lg text-center mb-[3px]"  
                onChange={(event) => setTag(event.target.value)} value={tag} placeholder="Enter word to get it's GIF"/>
            <button onClick={() => fetchData()} className="w-10/12 bg-[rgb(72,126,184)] text-lg py-2 rounded-lg font-semibold uppercase mb-[15px]">
                Generate
            </button>
        </div>
    )
};

export default Tag;