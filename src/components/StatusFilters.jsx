import { useShipments } from "../context/ShipmentsProvider.jsx";
import {useCallback} from "react";

const StatusFilters = () => {
    const { setFilter } = useShipments();


    const handleFilterChange = useCallback(
        (e) => {
            setFilter(e.target.value);
        },
        [setFilter]
    );

    return (
        <div className="flex gap-3 m-10 float-right">
            <p className="text-xl">Filter status</p>
            <select
                className="border py-2 px-16 rounded-md "
                onChange={handleFilterChange}
            >
                <option value="">All Shipments</option>
                <option value="Pending">Pending</option>
                <option value="In Transit">In Transit</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
            </select>
        </div>
    );
};

export default StatusFilters;
