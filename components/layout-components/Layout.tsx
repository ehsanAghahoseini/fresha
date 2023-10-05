import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/layout-components/Footer"));
const Nav = dynamic(() => import("@/components/layout-components/Nav"));


 const Layout=({ children }: any)=>{
    return(
        <div className="w-full flex flex-col">
            <Nav/>
            {children}
            <Footer />
        </div>
    )
}

export default Layout