import { FiTruck, FiBarChart, FiSettings } from "react-icons/fi";

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-900 text-white px-4 py-8 fixed inset-y-0 left-0 z-30 ">
            <h2 className="text-xl font-bold mb-6">Dashboard</h2>
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
