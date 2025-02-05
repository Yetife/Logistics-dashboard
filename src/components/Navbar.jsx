const Navbar = ({openSidebar}) => {

    const handleClick = () => {
        openSidebar(true)
    }
    return (
        <div className="w-full bg-white shadow-md p-4 fixed" >
            <div className="lg:hidden block">
                <div className="flex space-x-4">
                    <button onClick={handleClick} className="text-gray-500 focus:outline-none lg:hidden">
                        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <div>
                        <h1 className="text-xl font-bold">Logistics Dashboard</h1>
                    </div>
                </div>
            </div>
            <div className="lg:block hidden">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">Logistics Dashboard</h1>
                    <input
                        type="text"
                        placeholder="Search Shipments..."
                        className="border p-2 rounded-md mr-72"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
