import { useData } from "../DataContext"

export const Sidebar = () => {
    const {data} = useData();
    return(
        <div className="w-1/4 flex flex-col p-4 gap-4 bg-gray-300 min-h-screen sticky top-0 self-start relative">
            <div className="flex gap-3 p-4">
            <img src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"
            className="w-8"/>
            <h3>Home</h3>
            </div>
            <div className="flex gap-3 p-4">
            <img src="https://cdn-icons-png.flaticon.com/128/565/565504.png" className="w-8"/>
            <h3>Explore</h3>
            </div>
            <div className="flex gap-3 p-4">
            <img src="https://cdn-icons-png.flaticon.com/128/102/102279.png" className="w-8"/>
            <h3>BookMarks</h3>
            </div>
            <div className="flex gap-3 p-4">
            <img src="https://cdn-icons-png.flaticon.com/128/456/456212.png" className="w-8"/>
            <h3>Profile</h3>
            </div>
            <div className="flex gap-3 absolute bottom-8">
                <img src={data.picUrl} className="w-8"/>
                <div className="flex flex-col">
                    <h3>{data.name}</h3>
                    <h3>@{data.username}</h3>
                </div>
            </div>
        </div>
    )
}