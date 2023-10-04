import { useState , useContext } from 'react'
import dynamic from "next/dynamic";
import { ContextContainer } from '@/context/ContextContainer';
const PostSection = dynamic(() => import("@/components/profile-cmponents/PostSection"));
const AddSalonSection = dynamic(() => import("@/components/profile-cmponents/AddSalonSection"));


const MainProfile = () => {
    const Ctx = useContext(ContextContainer) 

    return (

        <div className="md:w-[calc(100%-250px)] w-full md:pl-[20px] pl-0 md:my-0 my-10">
            <div className="w-full h-fit flex flex-col">
                <div className="w-full flex md:items-start items-center justify-between">
                    <span className="md:text-xl text-sm">{Ctx.profileTab == 'list' ? 'Salons List' : 'New Salon'}</span>
                    <div className="md:w-[180px] w-[160px] md:h-[35px] h-[30px] rounded-full flex items-center overflow-hidden border">
                        <button onClick={() => { Ctx.setProfileTab('list') }} className={`w-[50%] h-full rounded-full text-sm ${Ctx.profileTab == 'list' ? 'bg-fresh-25 text-white' : 'bg-transparent'}`}>List</button>
                        <button onClick={() => { Ctx.setProfileTab('new') }} className={`w-[50%] h-full rounded-full text-sm ${Ctx.profileTab == 'new' ? 'bg-fresh-25 text-white' : 'bg-transparent'}`}>New</button>
                    </div>
                </div>
                {Ctx.profileTab == 'list' ?
                    <PostSection />
                    :
                    <AddSalonSection />
                }
            </div>
        </div>

    )
}

export default MainProfile;

