import React, { useEffect, useContext, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, Pane, Circle, LayerGroup } from "react-leaflet";
import L from 'leaflet';
// import { GeoSearchControl, OpenStreetMapProvider, SearchControl } from 'leaflet-geosearch';
import { useMapEvents } from "react-leaflet";


interface IMapProps {
    position: any,
    setPosition: (string: any) => void,
}


export default function ProfileMap({ position, setPosition  }: IMapProps) {

    let DefaultIcon = L.icon({
        iconUrl: '/icon/pin2.png',
        iconSize: new L.Point(30, 40),
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    return (
        <div className="w-full flex flex-col mt-5">
            <span className="text-gray-500 mb-2">Location</span>
            <div className="w-full h-[200px] rounded-md overflow-hidden">
                {position != null && 
                    <MapContainer
                        id="map"
                        center={position}
                        zoom={13}
                        doubleClickZoom={false}
                        closePopupOnClick={false}
                        trackResize={false}
                        touchZoom={false}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} />
                        <DrogMap setPosition={setPosition} />
                    </MapContainer>
                }
            </div>
        </div>
    )
}



export function DrogMap(props: any) {
    useMapEvents({
        move: (e) => {
            props.setPosition([e.target.getCenter().lat, e.target.getCenter().lng])
        }
    });
    return null
}