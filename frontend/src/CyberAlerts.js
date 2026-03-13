import React,{useState} from "react"

function CyberAlerts({addAlert}){

const [attack,setAttack]=useState("")

const submit=(e)=>{

e.preventDefault()

addAlert({
msg:attack
})

setAttack("")

}

return(

<div>

<h1>Cyber Security Alerts</h1>

<form onSubmit={submit}>

<input
placeholder="Enter cyber attack"
value={attack}
onChange={(e)=>setAttack(e.target.value)}
/>

<button type="submit">
Add Attack
</button>

</form>

<ul>

<li>DDoS attack detected</li>
<li>Malware infection</li>
<li>Phishing attempt</li>

</ul>

</div>

)

}

export default CyberAlerts