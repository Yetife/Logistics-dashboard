import { FiTruck, FiBarChart, FiSettings } from "react-icons/fi";

const Sidebar = ({openSidebar, updateSidebarOpen}) => {

    const handleClick = () => {
        updateSidebarOpen(false)
    }
    const handleOnBlur = () => {
        updateSidebarOpen(false)
    }
    return (
        <div onBlur={handleOnBlur} className={`w-64 h-screen bg-gray-900 text-white px-4 py-8 fixed left-0 z-30 overflow-hidden overflow-y-auto transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0
         ${ openSidebar ? 'translate-x-0 ease-out block' : '-translate-x-full ease-in'}`}>
            <div className="flex items-center space-x-4 mb-6">
                <h2 className="text-xl font-bold ">Dashboard</h2>
                {openSidebar && (
                    <div onClick={handleClick}>
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 0.5C4.93477 0.5 0 5.43477 0 11.5C0 17.5652 4.93477 22.5 11 22.5C17.0652 22.5 22 17.5652 22 11.5C22 5.43477 17.0652 0.5 11 0.5ZM11 2.19231C16.1505 2.19231 20.3077 6.34946 20.3077 11.5C20.3077 16.6505 16.1505 20.8077 11 20.8077C5.84946 20.8077 1.69231 16.6505 1.69231 11.5C1.69231 6.34946 5.84946 2.19231 11 2.19231ZM7.80154 7.08308L6.58308 8.30154L9.78492 11.5L6.58477 14.6985L7.80323 15.9169L11 12.7159L14.1985 15.9144L15.4169 14.6985L12.2159 11.5L15.4144 8.30154L14.1985 7.08308L11 10.2849L7.80154 7.08477V7.08308Z"
                                fill="#ffffff"/>
                        </svg>
                    </div>
                )}
            </div>
            <ul>
                <li className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded cursor-pointer">
                    <FiTruck /> Shipments
                </li>
                <li className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded cursor-pointer">
                    <FiBarChart /> Analytics
                </li>
                <li className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded cursor-pointer">
                    <FiSettings /> Settings
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
