import React, { useState } from 'react'

export const ContextContainer = React.createContext<any>({})


 function ContextContainerModels(props: any) {
    const [profileTab , setProfileTab] = useState<string>('list')


    return (
        <ContextContainer.Provider value={{
            profileTab,
            setProfileTab ,
        }}>
            {props.children}
        </ContextContainer.Provider>
    )
}

export default ContextContainerModels