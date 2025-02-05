import { useEffect, useContext } from "react";
import { useShipments } from "../context/ShipmentsProvider";

const useWebSocket = () => {
    const { setShipments } = useShipments();

    useEffect(() => {
        const socket = new WebSocket("wss://your-websocket-url");

        socket.onmessage = (event) => {
            const updatedShipments = JSON.parse(event.data);
            setShipments((prevShipments) => [...updatedShipments]);
        };

        return () => {
            socket.close();
        };
    }, [setShipments]);
};

export default useWebSocket;
