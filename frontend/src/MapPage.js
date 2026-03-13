import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

function MapPage({ incidents }) {

const center = { lat: 17.385, lng: 78.486 }

return (

<div>

<h2>City Incident Map</h2>

<LoadScript googleMapsApiKey="AIzaSyB2dTZ7OIZ7VMvMBCBi_DDJKUvlhxGvcB8">

<GoogleMap
mapContainerStyle={{
width: "900px",
height: "500px"
}}
center={center}
zoom={11}
>

{incidents.map((i,index)=>(

<Marker
key={index}
position={{
lat:17.38 + Math.random()/10,
lng:78.48 + Math.random()/10
}}
/>

))}

</GoogleMap>

</LoadScript>

</div>

)

}

export default MapPage