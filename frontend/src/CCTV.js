import React from "react"

function CCTV(){

const cameras=[
{ id:1, zone:"Zone A", src:"https://www.youtube.com/embed/i3nqE3Yqk0Q" },
{ id:2, zone:"Zone B", src:"https://www.youtube.com/embed/1EiC9bvVGnk" },
{ id:3, zone:"Zone C", src:"https://www.youtube.com/embed/cbP2N1BQdYc" },
{ id:4, zone:"Zone A", src:"https://www.youtube.com/embed/i3nqE3Yqk0Q" },
{ id:5, zone:"Zone B", src:"https://www.youtube.com/embed/1EiC9bvVGnk" }
]

return(

<div>

<h1 style={{fontSize:"28px",fontWeight:"bold"}}>
SMART CITY CCTV SURVEILLANCE
</h1>

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr 1fr",
gap:"20px",
marginTop:"20px"
}}>

{cameras.map(c=>{

const motion=Math.random()>0.75

return(

<div
key={c.id}
style={{
background:"#111827",
color:"white",
padding:"10px",
borderRadius:"8px"
}}
>

<div style={{
display:"flex",
justifyContent:"space-between"
}}>

<span style={{color:"red"}}>● LIVE</span>
<span style={{color:"lightgreen"}}>ONLINE</span>

</div>

<h4>Camera {c.id}</h4>

<p style={{fontSize:"13px"}}>
Location: {c.zone}
</p>

<iframe
width="100%"
height="180"
src={c.src}
title={"Camera "+c.id}
frameBorder="0"
allowFullScreen
/>

{motion && (

<div style={{
background:"red",
padding:"5px",
marginTop:"5px",
fontSize:"12px",
textAlign:"center"
}}>
🚨 Motion Detected
</div>

)}

</div>

)

})}

</div>

</div>

)

}

export default CCTV