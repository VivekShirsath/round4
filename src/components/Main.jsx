import { useData } from "../DataContext"
import { Card } from "./Card";

export const Main = () => {
    const {data,filters,setFilters} = useData();
   
    return(
        <div className="w-2/4 flex flex-col">
           <h2 className="flex justify-center shadow shadow-sm p-4 text-lg">{filters}</h2>
           {
            data.posts?.map((post) => <Card key={post.postId} post={post}/>)
           }
        </div>
    )
}