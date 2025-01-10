import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import BinMarker from "./BinMarker";
import { useEffect, useState } from "react";
import axios from "axios";

interface BinData {
    id: string;
    latitude: number;
    longitude: number;
    binStatus: number;
}

const LeafletMap = () => {
    const [binData, setBinData] = useState<BinData[]>([]);
    const mapCenter: [number, number] = [40.668861081525584, -73.3133544464864];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/ebin/allbins");
                if (response.data) {
                    const mappedData = response.data.map((item: any) => ({
                        id: item.id,
                        latitude: parseFloat(item.binLat),
                        longitude: parseFloat(item.binLong),
                        binStatus: item.binStatus,
                    }));
                    setBinData(mappedData);
                }
            } catch (error) {
                console.error("Error fetching bin data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="w-full h-full">
            <MapContainer
                center={mapCenter}
                zoom={13}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Central marker */}
                <Marker position={mapCenter}>
                    <Popup>This is the center marker</Popup>
                </Marker>

                {binData.map((val: BinData) => (
                    <BinMarker key={val.id} position={[val.latitude, val.longitude]}>
                        <Popup>ID: {val.id} Status: {val.binStatus}%</Popup>
                    </BinMarker>
                ))}
            </MapContainer>
        </div>
    );
};

export default LeafletMap;
