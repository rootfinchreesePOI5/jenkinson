import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const GoogleMapComponent = () => {
    const marinaLocation = [1.3521, 103.8198]; // Example coordinates (Singapore)

    return (
        <MapContainer center={marinaLocation} zoom={15} className='map'>
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={marinaLocation}>
                <Popup>Jenkinson Sea Life, Singapore</Popup>
            </Marker>
        </MapContainer>
    );
};

export default GoogleMapComponent;
