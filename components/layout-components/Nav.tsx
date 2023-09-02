import { CSvgLogo, CSvgMore } from "@/icons"

export const Nav = () => {
    return (
        <div className="fixed top-0 w-full flex justify-center ">
            <nav className="w-full flex items-center justify-between max-w-[1400px] lg:h-[80px] h-[60px] bg-transparent  px-3">
                <CSvgLogo className="w-[80px]" />
                <div className=" lg:flex hidden items-center ">
                    {['Home', 'Barbers', 'About us', 'Contact us'].map((item: any, index: number) =>
                        <span className="w-[120px]" key={index}>{item}</span>
                    )}
                </div>
                <div className="lg:flex hidden items-center">
                    <button className="w-[120px] h-[40px] rounded-lg border border-fresh-25 text-fresh-25 flex items-center justify-center bg-transparent hover:bg-fresh-25 hover:text-white transition-all">For business</button>
                    <button className="w-[120px] h-[40px] rounded-lg border border-fresh-25 bg-fresh-25 text-white flex items-center justify-center ml-2">Register</button>
                </div>
                <button className="w-[35px] h-[35px] border border-fresh-25 rounded-lg lg:hidden flex items-center justify-center">
                    <CSvgMore className="stroke-fresh-25 w-[26px]" />
                </button>
            </nav>
        </div>
    )
}