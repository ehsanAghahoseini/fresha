import { CSvgLogo, CSvgMore } from "@/icons"
import { useEffect, useMemo, useState } from "react";
import { ModalAuth } from "@/components";
import Link from "next/link";

export const Nav = () => {
    const [visibleAuthModal, setVisibleAuthModal] = useState<boolean>(false)

    const AuthModal = useMemo(() => {
        return (
            <ModalAuth visible={visibleAuthModal} setVisible={setVisibleAuthModal} />
        )
    }, [visibleAuthModal]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            var nav = document.getElementById('nav-cont')!;
            if (window.pageYOffset > 20) {
                nav.classList.add("bg-white");
                nav.classList.add("shadow");
                nav.classList.remove("bg-transparent");
            } else {
                nav.classList.remove("bg-white");
                nav.classList.remove("shadow");
                nav.classList.add("bg-transparent");
            }
        });
    })


    return (
        <>
            <div id="nav-cont" className="fixed top-0  w-full flex justify-center bg-transparent transition-all duration-300 z-10">
                <nav className="w-full flex items-center justify-between max-w-[1400px] lg:h-[80px] h-[50px] bg-transparent  px-3">
                    <Link href={'/'} aria-label="landing">
                        <CSvgLogo className="md:w-[80px] w-[70px]" />
                    </Link>
                    <div className=" lg:flex hidden items-center ">
                        {['Home', 'Barbers', 'About us', 'Contact us'].map((item: any, index: number) =>
                            <span className="w-[120px] cursor-pointer" key={index}>{item}</span>
                        )}
                    </div>
                    <div className="lg:flex hidden items-center">
                        <button aria-label="menu" onClick={() => { setVisibleAuthModal(true) }} className="w-[120px] h-[40px] rounded-lg border border-fresh-25 text-fresh-25 flex items-center justify-center bg-transparent hover:bg-fresh-25 hover:text-white transition-all">For business</button>
                        <button aria-label="menu" onClick={() => { setVisibleAuthModal(true) }} className="w-[120px] h-[40px] rounded-lg border border-fresh-25 bg-fresh-25 text-white flex items-center justify-center ml-2">Register</button>
                    </div>
                    <button aria-label="menu" onClick={() => { setVisibleAuthModal(true) }} className="w-[30px] h-[30px] border border-fresh-25 rounded-lg lg:hidden flex items-center justify-center">
                        <CSvgMore className="stroke-fresh-25 w-[23px]" />
                    </button>
                </nav>
            </div>
            {AuthModal}
        </>
    )
}

