const HomeHero = () => {
    return (
        <>
            <div className="w-full h-max ">
                <div className="w-full h-[85vh] phone:h-[70vh] herobg herobgsm flex phone:flex-col phone:items-center phone:p-2">
                    <div className="w-1/2 h-max phone:h-[70%]"></div>
                    <div className="w-1/2 phone:w-[90%] h-full phone:h-[30%] flex items-center justify-center">
                        <div className="bg-white w-max phone:w-full phone:pr-0 pr-40 h-max rounded-md p-8 phone:p-4 flex flex-col gap-1">
                            <p className=" font-medium">Autumn Sneakers</p>
                            <p className="text-gray-400 text-xs">
                                The pair of sneakers you need
                            </p>
                            <button className="w-max h-max px-12 py-3 text-sm rounded bg-black text-white font-semibold mt-4 phone:mt-2">
                                Discover
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHero;
