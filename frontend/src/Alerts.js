import React,{useState} from "react"

function Alerts({alerts}){

const [ack,setAck] = useState([])

const acknowledge=(i)=>{

setAck([...ack,i])

}

return(

<div>

<h1>System Alerts</h1>

{alerts.map((a,i)=>(

<div key={i}
style={{
border:"1px solid red",
padding:"10px",
margin:"10px"
}}>

<p>{a.msg}</p>

{ack.includes(i)
? <span style={{color:"green"}}>Acknowledged</span>
:
<button onClick={()=>acknowledge(i)}>
Acknowledge
</button>
}

</div>

))}

</div>

)

}

export default Alerts