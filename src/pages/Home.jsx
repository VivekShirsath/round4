import { Header } from "../components/Header"
import { Body } from "../components/Body"

export const Home = () => {
    return(
        <div className="flex flex-col text-md">
            <Header/>
            <Body/>
        </div>
    )
}