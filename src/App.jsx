import { ShipmentProvider } from "./context/ShipmentsProvider.jsx";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <ShipmentProvider>
            <Dashboard />
        </ShipmentProvider>
    );
}

export default App;
