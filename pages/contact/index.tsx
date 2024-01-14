export default function Home() {
    return (
        <main className={`w-full max-w-3xl mt-[50px] flex flex-col mx-auto `}>
            <div className="w-full flex justify-center md:mt-10 mt-5">
                <div className="w-full max-w-5xl  p-3 flex flex-col ">
                    <div className="w-full min-h-[50px] rounded-md bg-fresh-50 px-4 flex items-center ">
                        Ways to contact us
                    </div>
                    <div className="w-full flex items-center flex-wrap mt-4">
                        <div className="md:w-[50%] w-full md:pr-2 pr-0 ">
                            <div className="w-full min-h-[50px] rounded-md bg-fresh-25 px-4 flex items-center  justify-between text-white md:mb-0 mb-4">
                                <span>Email Support</span>
                                <span>support@admin.com</span>
                            </div>
                        </div>
                        <div className="md:w-[50%] w-full md:pl-2 pl-0 ">
                            <div className="w-full min-h-[50px] rounded-md bg-fresh-25 px-4 flex items-center  justify-between text-white">
                                <span>Email Admin </span>
                                <span>info@admin.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  mt-4 p-4 bg-white shadow rounded-md flex items-center flex-wrap">

                        <div className="md:w-[50%] w-full p-3 flex flex-col  ">
                            <h3>Contact us</h3>
                            <form className="w-full flex flex-col mt-8">
                                <div className="w-full flex flex-col">
                                    <span className="text-sm text-gray-600">Your name :</span>
                                    <input placeholder="Enter your name" type="text" className="w-full h-[40px] mt-2 rounded-md border focus:outline-none text-sm px-2" />
                                </div>
                                <div className="w-full flex flex-col mt-5">
                                    <span className="text-sm text-gray-600">Your Email :</span>
                                    <input placeholder="Enter Your Email" type="email" className="w-full h-[40px] mt-2 rounded-md border focus:outline-none text-sm px-2" />
                                </div>
                                <div className="w-full flex flex-col mt-5">
                                    <span className="text-sm text-gray-600">Your Message :</span>
                                    <textarea placeholder="Enter Your Message" className="w-full min-h-[70px] mt-2 rounded-md border focus:outline-none text-sm p-2" />
                                </div>
                                <button className="w-full h-[40px] mt-5 text-white bg-fresh-25 flex items-center justify-center rounded-md">Submit</button>
                            </form>
                        </div>
                        <div className="md:w-[50%] w-full p-3 md:flex hidden flex-col items-center justify-center ">
                            <img src="/contact/1.avif" className="w-[80%]" />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}