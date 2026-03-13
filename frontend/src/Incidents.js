import React,{useState} from "react"

function Incidents({incidents,addIncident}){

const [zone,setZone] = useState("")
const [type,setType] = useState("")
const [severity,setSeverity] = useState("")

const submit=(e)=>{

e.preventDefault()

addIncident({zone,type,severity})

setZone("")
setType("")
setSeverity("")
}

return(

<div>

<h1>Incident Manager</h1>

<form onSubmit={submit}>

<input
placeholder="Zone"
value={zone}
onChange={(e)=>setZone(e.target.value)}
/>

<input
placeholder="Type"
value={type}
onChange={(e)=>setType(e.target.value)}
/>

<select
value={severity}
onChange={(e)=>setSeverity(e.target.value)}
>

<option>Low</option>
<option>Medium</option>
<option>High</option>
<option>Critical</option>

</select>

<button type="submit">
Report Incident
</button>

</form>

<h2>All Incidents</h2>

{incidents.map((i,index)=>(

<div key={index}
style={{
border:"1px solid gray",
margin:"10px",
padding:"10px"
}}>

Zone: {i.zone} |
Type: {i.type} |
Severity: {i.severity}

</div>

))}

</div>

)

}

export default Incidents