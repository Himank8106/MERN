// import axios from "axios";
import React, {useEffect, useState} from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    // This below code has been moved to src/hooks/useGif.js by creating a custom hook

    // const [gif, setGif] = useState(''); 
    // const [loading, setLoading] = useState(false);

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false);
    // }
   
    // useEffect(() => {
    //     fetchData();
    // }, []);

    const {gif, loading, fetchData} = useGif();

    function clickHandler(){
        fetchData();
    }

    return(
        <div className="w-1/2 bg-[rgb(74,222,128)] border border-black rounded-lg flex flex-col items-center gap-y-5 mt-[15px] ">
            <h1 className="text-2xl underline uppercase font-bold mt-[15px]">A Random GIF</h1>
            {
                loading ? <Spinner/> :  <img src={gif} width="450" />
            }
            <button onClick={() => fetchData()} className="w-10/12 bg-[rgb(201,245,217)] text-lg py-2 rounded-lg font-semibold uppercase mb-[15px]">
                Generate
            </button>
        </div>
    )
};

export default Random;