import React from "react"
import {GoogleMap,LoadScript,Marker} from "@react-google-maps/api"
import {PieChart,Pie,Cell,LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid} from "recharts"

function Dashboard({incidents}){

const center={lat:17.385,lng:78.486}

/* TOTAL INCIDENTS */

const total=incidents.length

/* CYBER INCIDENTS */

const cyber=incidents.filter(i=>
i.type.toLowerCase().includes("attack")||
i.type.toLowerCase().includes("malware")||
i.type.toLowerCase().includes("ddos")||
i.type.toLowerCase().includes("phishing")||
i.type.toLowerCase().includes("cyber")
).length

const physical=total-cyber

/* ZONE COUNTS */

const zoneA=incidents.filter(i=>i.zone==="Zone A").length
const zoneB=incidents.filter(i=>i.zone==="Zone B").length
const zoneC=incidents.filter(i=>i.zone==="Zone C").length

/* ZONE LISTS */

const zoneAList=incidents.filter(i=>i.zone==="Zone A")
const zoneBList=incidents.filter(i=>i.zone==="Zone B")
const zoneCList=incidents.filter(i=>i.zone==="Zone C")

/* PIE DATA */

const data=[
{name:"Cyber",value:cyber},
{name:"Physical",value:physical}
]

/* INCIDENT TREND */

const trend=[
{day:"Mon",inc:3},
{day:"Tue",inc:5},
{day:"Wed",inc:2},
{day:"Thu",inc:6},
{day:"Fri",inc:4}
]

/* CYBER THREAT % */

const threatPercent = total===0 ? 0 : Math.round((cyber/total)*100)

return(

<div>

<h1 style={{
fontSize:"36px",
fontWeight:"bold",
textTransform:"uppercase",
animation:"slideTitle 1.2s ease"
}}>
HYBRID SURVEILLANCE AND CYBER SECURITY MANAGEMENT SYSTEM
</h1>

<style>
{`
@keyframes slideTitle{
from{transform:translateX(-300px);opacity:0}
to{transform:translateX(0);opacity:1}
}
`}
</style>

{/* INCIDENT OVERVIEW */}

<div style={{
background:"#111827",
color:"white",
padding:"25px",
borderRadius:"10px",
marginTop:"20px",
width:"700px"
}}>

<h2>City Incident Overview</h2>

<div style={{display:"flex",gap:"30px",marginTop:"15px"}}>

<div>
<h4>Total Incidents</h4>
<h2>{total}</h2>
</div>

<div>
<h4>Cyber Attacks</h4>
<h2>{cyber}</h2>
</div>

<div>
<h4>Zone A</h4>
<h2>{zoneA}</h2>
</div>

<div>
<h4>Zone B</h4>
<h2>{zoneB}</h2>
</div>

<div>
<h4>Zone C</h4>
<h2>{zoneC}</h2>
</div>

</div>
</div>

{/* CYBER THREAT BAR */}

<h3 style={{marginTop:"30px"}}>Cyber Threat Level</h3>

<div style={{
width:"500px",
height:"20px",
background:"#ddd"
}}>

<div style={{
width: threatPercent + "%",
height:"20px",
background:"red"
}}></div>

</div>

<p>{threatPercent}% of incidents are cyber related</p>

{/* GRAPHS */}

<div style={{display:"flex",gap:"40px",marginTop:"30px"}}>

<PieChart width={250} height={250}>
<Pie data={data} dataKey="value" outerRadius={90}>
<Cell fill="red"/>
<Cell fill="blue"/>
</Pie>
</PieChart>

<LineChart width={420} height={250} data={trend}>
<CartesianGrid strokeDasharray="3 3"/>
<XAxis dataKey="day"/>
<YAxis/>
<Tooltip/>
<Line type="monotone" dataKey="inc" stroke="#2563eb"/>
</LineChart>

</div>

{/* CITY MAP */}

<h3 style={{marginTop:"30px"}}>City Incident Map</h3>

<LoadScript googleMapsApiKey="AIzaSyB2dTZ7OIZ7VMvMBCBi_DDJKUvlhxGvcB8">

<GoogleMap
mapContainerStyle={{
width:"700px",
height:"350px",
borderRadius:"10px"
}}
center={center}
zoom={11}
>

{incidents.map((i,index)=>(

<Marker
key={index}
position={{
lat:17.38+Math.random()/10,
lng:78.48+Math.random()/10
}}
/>

))}

</GoogleMap>

</LoadScript>

{/* ZONE INCIDENT BOARDS */}

<h3 style={{marginTop:"30px"}}>Zone Incident Reports</h3>

<div style={{display:"flex",gap:"25px",marginTop:"15px"}}>

{/* Zone A */}

<div style={{background:"#f1f5f9",padding:"15px",width:"200px",borderRadius:"8px"}}>
<h4>Zone A</h4>

{zoneAList.length===0 && <p>No incidents</p>}

{zoneAList.map((i,index)=>(

<div key={index} style={{
background:"white",
padding:"5px",
marginTop:"5px",
borderLeft:"4px solid red"
}}>
{i.type} ({i.severity})
</div>

))}

</div>

{/* Zone B */}

<div style={{background:"#f1f5f9",padding:"15px",width:"200px",borderRadius:"8px"}}>
<h4>Zone B</h4>

{zoneBList.length===0 && <p>No incidents</p>}

{zoneBList.map((i,index)=>(

<div key={index} style={{
background:"white",
padding:"5px",
marginTop:"5px",
borderLeft:"4px solid orange"
}}>
{i.type} ({i.severity})
</div>

))}

</div>

{/* Zone C */}

<div style={{background:"#f1f5f9",padding:"15px",width:"200px",borderRadius:"8px"}}>
<h4>Zone C</h4>

{zoneCList.length===0 && <p>No incidents</p>}

{zoneCList.map((i,index)=>(

<div key={index} style={{
background:"white",
padding:"5px",
marginTop:"5px",
borderLeft:"4px solid blue"
}}>
{i.type} ({i.severity})
</div>

))}

</div>

</div>

{/* INCIDENT REPORT LIST */}

<h3 style={{marginTop:"30px"}}>Incident Reports</h3>

{incidents.map((i,index)=>(

<div
key={index}
style={{
background:"#f1f5f9",
padding:"10px",
marginTop:"10px",
borderLeft:"5px solid red"
}}
>

Zone: {i.zone} | Type: {i.type} | Severity: {i.severity}

</div>

))}

</div>

)

}

export default Dashboard