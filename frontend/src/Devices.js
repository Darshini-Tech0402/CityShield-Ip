import React,{useState} from "react"

function Devices(){

const [devices,setDevices]=useState([

{
name:"CCTV Camera",
status:true,
img:"https://cdn-icons-png.flaticon.com/512/483/483947.png"
},

{
name:"Drone",
status:true,
img:"https://cdn-icons-png.flaticon.com/512/744/744465.png"
},

{
name:"Firewall",
status:true,
img:"https://cdn-icons-png.flaticon.com/512/1039/1039320.png"
},

{
name:"IoT Sensor",
status:false,
img:"https://cdn-icons-png.flaticon.com/512/3176/3176294.png"
}

])

const toggle=(i)=>{

let copy=[...devices]
copy[i].status=!copy[i].status
setDevices(copy)

}

return(

<div>

<h1>Devices</h1>

<div style={{display:"flex",gap:"40px"}}>

{devices.map((d,i)=>(

<div key={i}
style={{
border:"1px solid gray",
padding:"20px",
textAlign:"center"
}}>

<img src={d.img} width="60"/>

<h3>{d.name}</h3>

<button onClick={()=>toggle(i)}>
{d.status ? "ON" : "OFF"}
</button>

</div>

))}

</div>

</div>

)

}

export default Devices