import React, { useEffect, useContext, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, Pane, Circle, LayerGroup } from "react-leaflet";
import L from 'leaflet';
// import { GeoSearchControl, OpenStreetMapProvider, SearchControl } from 'leaflet-geosearch';
import dynamic from "next/dynamic";
const CImage = dynamic(() => import("@/components/widget").then((mod) => mod.CImage), { ssr: false });


interface IProps {
    listPlace: any,
}


export default function SearchMap({ listPlace }: IProps) {
    const [firstItem, setFirstItem] = useState<any>(null)

    let DefaultIcon = L.icon({
        iconUrl: '/icon/salon.svg',
        iconSize: new L.Point(50, 50),
        className: 'bg-white rounded-full p-2'
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    useEffect(() => {
        if (listPlace && Array.isArray(listPlace) && listPlace?.[0]) {
            setFirstItem(listPlace?.[0])
        }
    }, [listPlace])

    return (
        <>
            {firstItem != null &&
                <MapContainer
                    id="map"
                    center={[51.505, -0.09]}
                    zoom={12}
                    doubleClickZoom={false}
                    closePopupOnClick={false}
                    trackResize={false}
                    touchZoom={true}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {listPlace && Array.isArray(listPlace) && listPlace?.map((item: any, index: number) =>
                        <Marker key={index} position={[51.505, -0.09]}>
                            <Popup>
                                <div className='w-[100px]  cursor-pointer bg-white rounded-md flex flex-col items-center '>
                                    <div className="w-full pt-[70%] relative overflow-hidden rounded-md">
                                        <CImage src={item?.image_url} className="w-full h-full absolute top-0 object-cover object-center" alt='bg' />
                                    </div>
                                    <div className='flex flex-col justify-end items-start text-[#252525]'>
                                        <span className=' font-bold mt-2'>{item.name}</span>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    )}
                </MapContainer>
            }
        </>
    )
}