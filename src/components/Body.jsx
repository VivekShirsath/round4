import { Sidebar } from "./Sidebar"
import { Main } from "./Main"
import { Sort } from "./Sort"

export const Body = () => {
    return(
        <div className="flex">
          <Sidebar/>
          <Main/>
          <Sort/>
        </div>
    )
}