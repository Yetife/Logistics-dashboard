import { useShipments } from "../context/ShipmentsProvider.jsx";

const StatusFilters = () => {
    const { setFilter } = useShipments();

    return (
        <div className="flex gap-4 mt-10 mb-4 float-right">
            <select
                className="border py-2 px-16 rounded-md w-full"
                onChange={(e) => setFilter(e.target.value)}
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
