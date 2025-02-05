import React, { memo, useContext } from "react";
import {useShipments} from "../context/ShipmentsProvider";

const ShipmentsTable = memo(() => {
    const { shipments, filter } = useShipments();
    const filteredShipments = filter
        ? shipments.filter((s) => s.status === filter)
        : shipments;

    return (
        <div className="bg-white p-4 rounded shadow">
            <table className="w-full border-collapse">
                <thead>
                <tr className="border-b">
                    <th className="p-2">ID</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Location</th>
                </tr>
                </thead>
                <tbody>
                {filteredShipments.length > 0 ? (
                    filteredShipments.map((shipment) => (
                        <tr key={shipment.id} className="border-b hover:bg-gray-100 transition-all opacity-0 animate-fadeIn">
                            <td className="p-2">{shipment.id}</td>
                            <td className={`p-2 ${shipment.status === "Delivered" ? "bg-green-200" : shipment.status === "In Transit" ? "bg-yellow-200" : shipment.status === "Cancelled" ? "bg-red-500" : "bg-red-200"} transition-opacity duration-500`}>
                                {shipment.status}
                            </td>
                            <td className="p-2">{shipment.location}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3" className="text-center text-gray-500">No shipments found</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
});

export default ShipmentsTable;
