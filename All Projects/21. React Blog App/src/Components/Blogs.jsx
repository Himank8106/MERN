import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {

    const {posts, loading} = useContext(AppContext);

    return (
        <div className="w-11/12 max-w-[670px] flex flex-col py-8 gap-y-7 mt-[60px] mb-[65px]">
            {
                loading ? <Spinner/> : (posts.length === 0 ? <div><p>No Posts Found</p></div> : (posts.map((post) => {
                    return(<div key={post.id}>
                        <p className="font-bold text-lg">{post.title}</p>
                        <p className="text-sm mt-[4px]">
                            By <span className="italic">{post.author}</span> on <span className="font-bold underline">{post.category}</span>
                        </p>
                        <p className="text-sm mt-[4px]">
                            Posted on {post.date}
                        </p>
                        <p className="text-md mt-[8px]">{post.content}</p>
                        <div className="flex gap-x-3 items-center flex-wrap">
                            {post.tags.map((tag, index) => {
                                return <span key={index} className="text-blue-600 underline font-bold text-xs mt-[5px]">{`#${tag}`}</span>
                            })}
                        </div>
                    </div>)
                    
                })))
            }
        </div>
    );
}

export default Blogs;