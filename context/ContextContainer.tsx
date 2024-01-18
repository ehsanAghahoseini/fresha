import React, { useState } from 'react'

export const ContextContainer = React.createContext<any>({})


 function ContextContainerModels(props: any) {
    const [profileTab , setProfileTab] = useState<string>('list')
    const [visibleDetail , setVisibleDetail] = useState<boolean>(false)
    const [salonId , setSalonId] = useState<number>(0)
    const [isAuth , setIsAuth] = useState<boolean>(false)
    const [userInfo , setUserInfo] = useState<any>(null)
    const [visibleMobileNav , setVisibleMobileNav] = useState<boolean>(false)


    return (
        <ContextContainer.Provider value={{
            profileTab,
            setProfileTab ,
            visibleDetail ,
            setVisibleDetail ,
            salonId ,
            setSalonId ,
            isAuth , 
            setIsAuth ,
            userInfo , 
            setUserInfo ,
            visibleMobileNav ,
            setVisibleMobileNav
        }}>
            {props.children}
        </ContextContainer.Provider>
    )
}

export default ContextContainerModels