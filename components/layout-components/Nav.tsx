import { CSvgLogo, CSvgMore } from "@/icons"
import { useContext, useEffect, useMemo, useState } from "react";
import ModalAuth from "@/components/auth-components/ModalAuth";
import Link from "next/link";
import { useRouter } from "next/router";
import { ContextContainer } from "@/context/ContextContainer";

const Nav = () => {
    const Ctx = useContext(ContextContainer)
    const router = useRouter()
    const [visibleAuthModal, setVisibleAuthModal] = useState<boolean>(false)

    const AuthModal = useMemo(() => {
        return (
            <ModalAuth visible={visibleAuthModal} setVisible={setVisibleAuthModal} />
        )
    }, [visibleAuthModal]);

    const handelRoute = (path: string) => {
        router.push(path)
        Ctx.setVisibleMobileNav(false)
    }

    useEffect(() => {
        if (router.isReady && router.pathname == '/') {
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
        }
    }, [router])


    useEffect(() => {
        if (router.isReady) {
            let nav = document.getElementById('nav-cont');
            if (router.pathname != '/') {
                nav?.classList.add('shadow')
                nav?.classList.add('bg-white')
            }
            else {
                nav?.classList.remove('shadow')
                nav?.classList.remove('bg-white')
            }
        }

    }, [router])


    return (
        <>
            <div id="nav-cont" className="fixed top-0  w-full flex justify-center bg-transparent transition-all duration-300 z-10">
                <nav className="w-full flex items-center justify-between max-w-[1200px] lg:h-[80px] h-[50px] bg-transparent  px-3">
                    <Link href={'/'} aria-label="landing">
                        <CSvgLogo className="md:w-[80px] w-[70px]" />
                    </Link>
                    <div className=" lg:flex hidden items-center ">
                        {data.map((item: any, index: number) =>
                            <span onClick={()=>handelRoute(item.path)} className="w-[120px] cursor-pointer" key={index}>{item.title}</span>
                        )}
                    </div>
                    {Ctx.isAuth ?
                        <div className="lg:flex hidden items-center">
                            <Link href={'/p'}>
                                <button aria-label="menu" className="w-[120px] h-[40px] rounded-lg border border-fresh-25 text-fresh-25 flex items-center justify-center bg-transparent hover:bg-fresh-25 hover:text-white transition-all">Profile</button>
                            </Link>
                        </div>
                        :
                        <div className="lg:flex hidden items-center">
                            <button aria-label="menu" onClick={() => { setVisibleAuthModal(true) }} className="w-[120px] h-[40px] rounded-lg border border-fresh-25 text-fresh-25 flex items-center justify-center bg-transparent hover:bg-fresh-25 hover:text-white transition-all">For business</button>
                            <button aria-label="menu" onClick={() => { setVisibleAuthModal(true) }} className="w-[120px] h-[40px] rounded-lg border border-fresh-25 bg-fresh-25 text-white flex items-center justify-center ml-2">Register</button>
                        </div>
                    }
                    <button aria-label="menu" onClick={() => { Ctx.setVisibleMobileNav(true) }} className="w-[30px] h-[30px] border border-fresh-25 rounded-lg lg:hidden flex items-center justify-center">
                        <CSvgMore className="stroke-fresh-25 w-[23px]" />
                    </button>
                </nav>
            </div>
            <MobileDrawer handelRoute={handelRoute} setVisibleAuthModal={setVisibleAuthModal} />
            {AuthModal}
        </>
    )
}

export default Nav



const MobileDrawer = ({handelRoute , setVisibleAuthModal}:any) => {
    const Ctx = useContext(ContextContainer)

    const handelOpenAuthModal=()=>{
        Ctx.setVisibleMobileNav(false)
        setVisibleAuthModal(true)
    }

    return (
        <>
            <div onClick={() => { Ctx.setVisibleMobileNav(false) }} className={`right-0 top-0 bottom-0 z-10 fixed bg-[#000000a8] transition-all duration-500 ${Ctx.visibleMobileNav ? 'left-0' : 'left-full'}`}></div>
            <div className={`w-[300px] max-w-full fixed  top-0 bottom-0 bg-white py-5 transition-all duration-500 z-[11] flex flex-col ${Ctx.visibleMobileNav ? 'left-0' : 'left-[-1000px]'} `}>
                <CSvgLogo className="md:w-[80px] w-[70px] mx-auto" />
                <div className="w-full flex flex-col mt-3">
                    {data.map((item: any, index: number) =>
                        <div onClick={()=>handelRoute(item.path)} key={index} className="w-full h-[50px] cursor-pointer border-b flex items-center px-2">{item.title}</div>
                    )}
                    {Ctx.isAuth ?
                        <div onClick={()=>handelRoute('/p')} className="w-full h-[50px] cursor-pointer border-b flex items-center px-2">Profile</div>
                        :
                        <div onClick={handelOpenAuthModal} className="w-full h-[50px] cursor-pointer border-b flex items-center px-2">Register / Login</div>
                    }
                </div>
            </div>
        </>
    )
}






let data = [
    {
        'title': 'Home',
        'path': '/'
    },
    {
        'title': 'About us',
        'path': '/about'
    },
    {
        'title': 'Contact us',
        'path': '/contact'
    },
]