import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ShipmentsTable from "../components/ShipmentsTable";
import StatusFilters from "../components/StatusFilters.jsx";
import AnalyticsChart from "../components/AnalyticsChart.jsx";

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow ml-64">
                <Navbar />
                <div className="flex-1 p-6 overflow-y-auto h-screen">
                    <div className='w-full pt-2'>
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
