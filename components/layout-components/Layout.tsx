import { Footer } from "."
import { Nav } from "./Nav"

export const Layout=({ children }: any)=>{
    return(
        <div className="w-full flex flex-col">
            <Nav/>
            {children}
            <Footer />
        </div>
    )
}