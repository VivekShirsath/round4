
import { createContext,useContext,useState } from "react";
import { forumData } from "./data";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data,setData] = useState(forumData);
    const [filters,setFilters] = useState("Posts")
    return(
        <DataContext.Provider value={{data,setData,filters,setFilters}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)