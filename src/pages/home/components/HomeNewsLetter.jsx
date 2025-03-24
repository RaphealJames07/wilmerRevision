const HomeNewsLetter = () => {
    return (
        <div className="w-full h-max px-20 phone:px-4 mt-20 phone:mt-10 ">
            <div className="w-full h-max flex flex-col items-center gap-4 bg-gray-300 p-4">
                <p className="text-2xl">ElvisScott Newsletter</p>
                <p className="text-center">
                    Sign up and get 10€ free on your first order from 100€
                    upwards
                </p>
                <div className="w-max phone:w-full h-12 phone:h-max border rounded flex phone:flex-col items-center p-1 gap-2 phone:gap-3 bg-white phone:bg-transparent phone:border-none ">
                    <input
                        type="text"
                        className="w-80 phone:w-full phone:border-gray-300 phone:border-2 phone:h-10 phone:bg-white phone:rounded h-full border-none outline-none pl-2"
                        placeholder="Enter your email address"
                    />
                    <button className="bg-black phone:w-full phone:h-10 w-max h-full px-4 text-white rounded">Sign-up</button>
                </div>
            </div>
        </div>
    );
};

export default HomeNewsLetter;
