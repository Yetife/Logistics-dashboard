import { createContext, useContext, useState, useEffect } from "react";
import shipmentsData from "../data/shipment.js";

const ShipmentContext = createContext();

export const ShipmentProvider = ({ children }) => {
    const [shipments, setShipments] = useState(shipmentsData);
    const [filter, setFilter] = useState("");

    // Simulate real-time updates every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setShipments((prev) =>
                prev.map((shipment) =>
                    shipment.status === "In Transit"
                        ? { ...shipment, status: "Delivered" }
                        : shipment.status === "Pending"
                            ? { ...shipment, status: "In Transit" } :shipment
                )
            );
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ShipmentContext.Provider value={{ shipments, setShipments, filter, setFilter }}>
            {children}
        </ShipmentContext.Provider>
    );
};

export const useShipments = () => useContext(ShipmentContext);


