declare type CardProps = {
    className?: string,
    index: number,
}

export const SalonsCards = ({ index, className }: CardProps) => {

    return (
        <div key={index} className={` ${className} shadow-salons flex flex-col shadow rounded-lg overflow-hidden relative `}>
            <img src="bg/card-bg.png" className="w-[60%] rotate-180 absolute bottom-0 right-0 z-[2] opacity-40  " alt='bg' />
            <div className="w-full pt-[50%] relative overflow-hidden">
                <img src={`salons/${index + 1}.avif`} className="w-full h-full absolute top-0 object-cover object-center" alt='bg' />
            </div>
            <div className=" w-full flex flex-col px-5 py-2 relative">
                <h3 className="md:text-xl text-lg font-bold text-[#061a3a]">BarberSmiths Marylebone</h3>
                <div className="w-full flex items-center mt-4">
                    <img src="barber/2.jpg" className="w-[45px] h-[45px] rounded-full" alt='barber' />
                    <span className="ml-2 font-bold text-sm text-gray-600">Eva Green</span>
                    <div className="ml-2 pl-2 border-l text-sm text-gray-400">
                        April 10, 2023
                    </div>
                </div>
                <span className="text-sm text-gray-400 my-3">Lorem ipsum dolor sit amet consectetur adipisicing sed.</span>
                <button className="w-[110px] h-[35px] text-sm bg-fresh-25 text-white rounded-full my-3 flex items-center justify-center">View Salons</button>
            </div>
        </div>

    )
}