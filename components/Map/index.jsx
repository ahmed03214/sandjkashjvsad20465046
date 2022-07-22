import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const getIcon = () => {
  const customIcon = new L.icon({
    iconUrl: "/assets/pin.webp",
    iconSize: [25, 30],
  });

  return customIcon;
};

const Map = ({ coordinates }) => {
  return (
    <MapContainer
      center={coordinates}
      zoom={10}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker icon={getIcon()} alt="marker" position={coordinates}>
        <Popup>ها هو مقرنا 🔥</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
