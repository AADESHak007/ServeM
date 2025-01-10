import React from 'react'
import binIcon from '../assets/recycle-bin.png'
import { Marker } from 'react-leaflet'
import L from "leaflet";

interface BinMarkerProps {
  position: L.LatLngExpression;
  children: React.ReactNode; // Content to display inside the marker
}

const BinMarker : React.FC<BinMarkerProps> = ({position ,children}) => {
  
  const customIcon = L.icon({
    iconUrl: binIcon,
    iconSize: [30, 30],
    iconAnchor: [25, 50],
  });

  return (
    <Marker position={position} icon={customIcon}>
      {children}
    </Marker>
  )
}

export default BinMarker