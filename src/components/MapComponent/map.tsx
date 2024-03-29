'use client';

import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'


import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl; 
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

interface MapProps {
    center?: number[]
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors';


const MapComponent: React.FC<MapProps> = ({ center }) => {
    const mapRef = useRef<L.Map | null>(null);
    
    // Use useEffect to update the map view when the center prop changes
    useEffect(() => {
        if (mapRef.current && center) {
            // You can use either setView or flyTo depending on your preference
            //mapRef.current.setView(center as L.LatLngExpression, 9); // 12 is the zoom level
            mapRef.current.flyTo(center as L.LatLngExpression, 6);
        }
    }, [center]);

    return (
        <MapContainer
            id='map'
            style={{ height: '93vh', width: '99vw', maxWidth: '99.9%', maxHeight: '99.9%' }}
            center={center as L.LatLngExpression || [7.1881, 21.09375]} 
            zoom={center ? 6 : 4} 
            //viewreset
            
            scrollWheelZoom={true} 
            className="rounded-lg"
            trackResize={true}
            ref={mapRef}
        >
            <TileLayer
                maxZoom={14}
                url={url}
                attribution={attribution}
            />
            {center && (
                <Marker position={center as L.LatLngExpression} />
            )}
        </MapContainer>
    )
}

export default MapComponent;