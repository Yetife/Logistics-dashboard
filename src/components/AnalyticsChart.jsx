import React, { useContext } from "react";
import {Bar, Pie} from "react-chartjs-2";
import { useShipments } from "../context/ShipmentsProvider";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
//
// ChartJS.register(ArcElement, Tooltip, Legend);
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const AnalyticsChart = () => {
    const { shipments } = useShipments();

    const statusCounts = shipments.reduce((acc, shipment) => {
        acc[shipment.status] = (acc[shipment.status] || 0) + 1;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(statusCounts),
        datasets: [
            {
                label: "Shipments Status",
                data: Object.values(statusCounts),
                backgroundColor: ["#ff6384", "#36a2eb", "#d70f27", "#ffce56"],
                // backgroundColor: [
                //     "rgba(255, 99, 132, 0.6)",
                //     "rgba(54, 162, 235, 0.6)",
                //     "rgba(75, 192, 192, 0.6)",
                //     "rgba(153, 102, 255, 0.6)",
                // ],
                // borderColor: [
                //     "rgba(255, 99, 132, 1)",
                //     "rgba(54, 162, 235, 1)",
                //     "rgba(75, 192, 192, 1)",
                //     "rgba(153, 102, 255, 1)",
                // ],
                // borderWidth: 1
            },
        ],
    };


    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Shipment Status Distribution" },
        },
    };



    return (
        <div className="h-[70vh] w-full mt-20 flex justify-center">
            <Bar data={data} options={options}/>
        </div>
    );
};

export default AnalyticsChart;
