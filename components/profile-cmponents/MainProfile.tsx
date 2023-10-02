import { useState } from 'react'
import dynamic from "next/dynamic";
const PostSection = dynamic(() => import("@/components/profile-cmponents/PostSection"));
const FormSection = dynamic(() => import("@/components/profile-cmponents/FormSection"));


const MainProfile = () => {
    const [activeTab, setActiveTab] = useState<string>('list')

    return (

        <div className="md:w-[calc(100%-250px)] w-full md:pl-[20px] pl-0 md:my-0 my-10">
            <div className="w-full h-fit flex flex-col">
                <div className="w-full flex md:items-start items-center justify-between">
                    <span className="md:text-xl text-sm">{activeTab == 'list' ? 'Salons List' : 'New Salon'}</span>
                    <div className="md:w-[180px] w-[160px] md:h-[35px] h-[30px] rounded-full flex items-center overflow-hidden border">
                        <button onClick={() => { setActiveTab('list') }} className={`w-[50%] h-full rounded-full text-sm ${activeTab == 'list' ? 'bg-fresh-25 text-white' : 'bg-transparent'}`}>List</button>
                        <button onClick={() => { setActiveTab('new') }} className={`w-[50%] h-full rounded-full text-sm ${activeTab == 'new' ? 'bg-fresh-25 text-white' : 'bg-transparent'}`}>New</button>
                    </div>
                </div>
                {activeTab == 'list' ?
                    <PostSection />
                    :
                    <FormSection />
                }
            </div>
        </div>

    )
}

export default MainProfile;

