import { comment } from "postcss";
import { useData } from "../DataContext";
import { NavLink } from "react-router-dom";
import { CommentCard } from "./CommentCard";

export const Card = ({post,mode}) => {
    const {data,setData} = useData();
    console.log(mode);

    const time = post.createdAt;
    
   const date = new Date(time);
   const minutes = date.getUTCMinutes();

    const upVote = () => {
        const set = data.posts.map((val) => val.postId === post.postId ? {...val,upvotes : val.upvotes+1}: val)
        //setData(set)
        setData({...data,posts:set});
    }

    const downVote = () => {
        const set = data.posts.map((val) => val.postId === post.postId ? {...val,upvotes : val.upvotes-1}: val)
        //setData(set)
        setData({...data,posts:set});
    }

    const handleBookmark = () => {
        const set = data.posts.map((val) => val.postId === post.postId ? {...val,isBookmarked : !val.isBookmarked}: val)
        //setData(set)
        setData({...data,posts:set});
    }
    
    return(
        <>
        <div className="flex gap-7 shadow shadow-md">
          <div className="flex flex-col p-4">
            <img src="https://cdn2.iconfinder.com/data/icons/boxicons-solid-vol-3/24/bxs-upvote-64.png" onClick={() => upVote()} className="cursor-pointer"/>
            <div>{post.upvotes-post.downvotes}</div>
            <img src="https://cdn2.iconfinder.com/data/icons/boxicons-solid-vol-2/24/bxs-downvote-64.png" onClick={() => downVote()} className="cursor-pointer"/>
          </div>
          <div className="flex flex-col gap-3 p-4">
           <div className="flex gap-2 items-center">
             <img src={post.picUrl} className="w-12"/>
             <h3>Posted by <span className="text-blue-700">@{post.name}</span></h3>
             <h4>{minutes}m</h4>
           </div>
           <div>
            <h2 className="font-bold">{post.post}</h2>
           </div>
           <div className="flex gap-3">
            {post.tags.map((val) => <div className="bg-gray-300 text-blue-700 p-1 rounded-md">{val}</div>)}
           </div>
           <div>
            <p>{post.postDescription}</p>
           </div>
           <div className="flex justify-between">
            <NavLink to = {"/profile/" + post.postId}>
            <img src="https://cdn-icons-png.flaticon.com/128/3193/3193015.png" className="w-8 cursor-pointe"/></NavLink>
            <img src="https://cdn-icons-png.flaticon.com/128/1358/1358023.png"
            className="w-8"/>
            {
                post.isBookmarked ? <img src="https://cdn-icons-png.flaticon.com/128/102/102279.png"
                className="w-8 cursor-pointer" onClick = {() => handleBookmark()}/>
                :
                <img src="https://cdn-icons-png.flaticon.com/128/25/25667.png"
            className="w-8 cursor-pointer" onClick = {() => handleBookmark()}/>
            }
           </div>
          </div>
        </div>
        <div className="flex gap-3 shadow shadow-md">
        {
            mode==="comment" && 
            post.comments.map((comment) => <CommentCard comment={comment} username={post.username}/>)
        }
        </div>
        </>
    )
}