import { useState } from "react"
import { useData } from "../DataContext";
export const Sort = () => {
    const {data,setData,filters,setFilters} = useData();
   
    const handleFilters = (e) => {
      console.log(e.target.value);
      if(e.target.value === "upvote"){
        const set = data.posts.sort((a, b) => b.upvotes- a.upvotes);
        //setData(set)
        setFilters("Most Likes")
        setData({...data,posts:set});
      }
      else if(e.target.value === "latest"){
        const set = data.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        //setData(set)
        setFilters("Latest Posts")
        setData({...data,posts:set});
      }

    }

    console.log(data);

    return(
        <div className="w-1/4 p-4 flex flex-col gap-3 bg-gray-300 min-h-screen sticky top-0 self-start">
            <h2>Sort By</h2>
            <select name="filter" id="filter"onChange={(e) => handleFilters(e)} >
            <option value="select">Select</option>   
            <option value="latest">Latest Post</option>
            <option value="upvote">Most Upvoted</option>
            </select>
        </div>
    )
}