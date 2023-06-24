import { Header } from "../components/Header"
import { Body } from "../components/Body"
import { Sidebar } from './../components/Sidebar';
import { Main } from "../components/Main";
import { useData } from "../DataContext";
import { Card } from "../components/Card";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Details = () => {
    const {data} = useData();
    const {id} = useParams();

    const selectedPost = data.posts.filter((val) => val.postId === id);
    console.log(selectedPost)
    return(
           <div className="flex flex-col text-lg">
            <Header/>
            <div className="flex">
          <Sidebar/>
          <div className="w-2/4 flex flex-col">
            <div className="flex gap-3 items-center">
                <NavLink to="/"><img src="https://cdn-icons-png.flaticon.com/128/3114/3114883.png"
                className="w-8" /></NavLink>
           <h2 className="flex justify-center p-4">Post</h2>
           </div>
           {
            <Card key={id} post={selectedPost[0]} mode="comment"/>
           }
        </div>
         
        </div>
        </div>
    )
}