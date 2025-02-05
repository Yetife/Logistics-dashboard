export const fetchShipments = async () => {
    const response = await fetch("/shipments.json");
    return response.json();
};
