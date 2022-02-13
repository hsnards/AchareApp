import { useState } from 'react'
import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from 'react-leaflet'

function Map({setShowForm , position ,setPosition}) {

    const center = {
        lat: 35.70413838980219,
        lng: 51.41029715538025,
    }
    const LocationMarker = () => {

        const map = useMapEvents({
            move() {
                setPosition(map.getCenter())
            }
        })
        return position === null ? null : (
              <Marker position={position} >
                  <Popup>شما اینجیید</Popup>
              </Marker>
        )
    }

    return (
          <div  className={"relative"}>
              <MapContainer  center={center} zoom={18}>
                  <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Hassan</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                    <LocationMarker />
              </MapContainer>
              <div className={"z-[999] absolute bottom-20   w-screen px-2.5 "}>
                  <button className={"px-16 py-3 text-white rounded-md bg-emerald-300 w-full"}  onClick={()=>{
                       setShowForm(true)
                      console.log('pos', position)
                  }}>تایید موقعیت</button>
              </div>
          </div>

    )
}
export default Map;
