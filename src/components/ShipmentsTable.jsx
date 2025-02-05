import React, { memo, useContext } from "react";
import {useShipments} from "../context/ShipmentsProvider";

const ShipmentsTable = memo(() => {
    const { shipments, filter } = useShipments();
    if (!shipments.length) {
        return <LoadingSpinner />;
    }

    const filteredShipments = filter
        ? shipments.filter((s) => s.status === filter)
        : shipments;

    return (
        <div className="bg-white p-4 rounded shadow">
            <table className="w-full border-collapse table-auto md:w-full px-20">
                <thead>
                <tr className="border-b">
                    <th className="px-4 py-3 text-[16px] font-medium leading-4 tracking-wider text-[#4A5D58] text-left border-b truncate bg-gray-50">ID</th>
                    <th className="px-4 py-3 text-[16px] font-medium leading-4 tracking-wider text-[#4A5D58] text-left border-b truncate bg-gray-50">Status</th>
                    <th className="px-4 py-3 text-[16px] font-medium leading-4 tracking-wider text-[#4A5D58] text-left border-b truncate bg-gray-50">Location</th>
                    <th className="px-4 py-3 text-[16px] font-medium leading-4 tracking-wider text-[#4A5D58] text-left border-b truncate bg-gray-50">Tracking Number</th>
                    <th className="px-4 py-3 text-[16px] font-medium leading-4 tracking-wider text-[#4A5D58] text-left border-b truncate bg-gray-50">Date</th>
                </tr>
                </thead>
                <tbody>
                {filteredShipments.length > 0 ? (
                    filteredShipments.map((shipment) => (
                        <tr key={shipment.id} className="border-b hover:bg-gray-100 transition-all opacity-0 animate-fadeIn">
                            <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{shipment.id}</td>
                            <td className={`px-4 py-4 whitespace-no-wrap border-b ${shipment.status === "Delivered" ? "bg-green-500" : shipment.status === "In Transit" ? "bg-yellow-200" : shipment.status === "Cancelled" ? "bg-red-500" : "bg-red-200"} transition-opacity duration-500`}>
                                {shipment.status}
                            </td>
                            <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{shipment.location}</td>
                            <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{shipment.trackingNumber}</td>
                            <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{shipment.date}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="text-center text-gray-500">No shipments found</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
});

export default ShipmentsTable;
