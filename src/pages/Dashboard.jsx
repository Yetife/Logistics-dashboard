import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ShipmentsTable from "../components/ShipmentsTable";
import StatusFilters from "../components/StatusFilters.jsx";
import AnalyticsChart from "../components/AnalyticsChart.jsx";
import {useState} from "react";

const Dashboard = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);

    const updateSidebarOpen = (val) => {
        setMenuOpen(val)
    }
    return (
        <div className="flex">
            <Sidebar openSidebar={menuOpen}
                     updateSidebarOpen={updateSidebarOpen}/>
            <div className="flex-grow">
                <Navbar openSidebar={updateSidebarOpen}/>
                <div className="flex-1 p-6 overflow-y-auto h-screen">
                    <div className='w-full pt-2 lg:w-[calc(100%) - 18rem]'>
                        <AnalyticsChart />
                        <StatusFilters />
                        <ShipmentsTable />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
