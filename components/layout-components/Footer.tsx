
export const Footer = () => {


    return (
        <section className="w-full bg-fresh-50  md:mt-40 mt-[110px] flex flex-col items-center justify-center pt-5">
            <div className="w-[90%] max-w-[1000px] px-4 min-h-[200px] py-4  flex flex-wrap items-center justify-between mt-[-120px] bg-white shadow-lg border rounded-2xl">
                <div className="md:w-[50%] w-full flex flex-col  justify-center items-center px-2">
                    <span className="md:text-xl text-lg text-gray-800">Join Our Newsletter</span>
                    <span className="text-gray-500 text-sm mt-2 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </span>
                </div>
                <div className="md:w-[50%] w-full md:mt-0 mt-4">
                    <form className="w-full flex flex-col items-center justify-center">
                        <span className="text-sm text-gray-700">Enter you email </span>
                        <input type="email" placeholder="Email Address" className="w-[250px] max-w-full h-[40px] rounded-full border mt-3 text-sm px-2 focus:outline-none"/>
                        <button className="mt-2 w-[120px] h-[35px] bg-fresh-25 text-white text-sm rounded-full">Submit</button>
                    </form>
                </div>
            </div>
            <div className="w-full max-w-[1400px] mt-20 flex flex-col items-center px-3">
                
            </div>
        </section>
    )
}