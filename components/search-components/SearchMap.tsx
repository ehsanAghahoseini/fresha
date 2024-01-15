import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import L from 'leaflet';

interface IProps {
    listPlace: any,
}


export default function SearchMap({ listPlace }: IProps) {
    const [firstItem, setFirstItem] = useState<any>(null)


    let DefaultIcon = L.icon({
        iconUrl: '/assetes/svg/home.svg',
        iconSize: new L.Point(50, 50),
        className: 'bg-white rounded-full flex items-center justify-center'
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    // useEffect(() => {
    //     if (listPlace && Array.isArray(listPlace) && listPlace?.[0]) {
    //         setFirstItem(listPlace?.[0])
    //     }
    // }, [listPlace])

    return (
        <>
            {/* {firstItem != null && */}
                <MapContainer
                    id="map"
                    center={[35,52]}
                    zoom={9}
                    maxZoom={13}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* {listPlace && Array.isArray(listPlace) && listPlace?.map((item: any, index: number) =>
                        <Marker key={index} position={[item.latitude, item.longitude]} >
                            <Popup>
                                <div className='w-[250px] h-[80px] cursor-pointer bg-white rounded-md flex items-center justify-start'>

                                </div>
                            </Popup>
                        </Marker>
                    )} */}
                </MapContainer>
            {/* } */}
        </>
    )
}