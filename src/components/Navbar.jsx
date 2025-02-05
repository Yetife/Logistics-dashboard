const Navbar = () => {
    return (
        <div className="w-full bg-white shadow-md p-4 flex justify-between fixed items-center" >
            <h1 className="text-xl font-bold">Logistics Dashboard</h1>
            <input
                type="text"
                placeholder="Search Shipments..."
                className="border p-2 rounded-md mr-72"
            />
        </div>
    );
};

export default Navbar;
