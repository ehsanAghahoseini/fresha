import { ContextContainer } from "@/context/ContextContainer";
import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import { CheckIsLogin } from "@/utils/auth-utils";
import { useRouter } from "next/router";


const Footer = dynamic(() => import("@/components/layout-components/Footer"));
const Nav = dynamic(() => import("@/components/layout-components/Nav"));
const ModalViewSalon = dynamic(() => import("@/components/layout-components/ModalViewSalon"));


const Layout = ({ children }: any) => {
    const Ctx = useContext(ContextContainer)
    const router = useRouter()


    const CheckAuth = async () => {
        if (CheckIsLogin()) {
            if (Ctx.isAuth == false) {
                Ctx.setIsAuth(true)
            }
        }
        else if (router.pathname == '/p') {
            return router.push('/')
        }
    }

    useEffect(() => {
        CheckAuth()
    }, [router.pathname])

    return (
        <div className="w-full flex flex-col">
            <Nav />
            {children}
            <Footer />
            <ModalViewSalon
                setVisible={Ctx.setVisibleDetail}
                visible={Ctx.visibleDetail}
                salonId={Ctx.salonId}
            />
        </div>
    )
}

export default Layout