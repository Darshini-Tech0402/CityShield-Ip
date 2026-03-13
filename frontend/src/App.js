import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Incidents from "./Incidents";
import Alerts from "./Alerts";
import Devices from "./Devices";
import MapPage from "./MapPage";
import CCTV from "./CCTV";
import CyberAlerts from "./CyberAlerts";
import Login from "./Login";

function App() {

/* LOGIN STATE */

const [loggedIn, setLoggedIn] = useState(false);

/* SIDEBAR */

const [page, setPage] = useState("dashboard");
const [open, setOpen] = useState(true);

/* INCIDENT DATA */

const [incidents, setIncidents] = useState([
{ zone: "Zone A", type: "Motion", severity: "High" },
{ zone: "Zone C", type: "Cyber Attack", severity: "Critical" }
]);

/* ALERT DATA */

const [alerts, setAlerts] = useState([
{ msg: "Firewall breach detected", status: "new" },
{ msg: "Suspicious login attempt", status: "new" }
]);

/* ADD INCIDENT */

const addIncident = (incident) => {

setIncidents([...incidents, incident]);

if(
incident.type.toLowerCase().includes("cyber") ||
incident.type.toLowerCase().includes("attack") ||
incident.type.toLowerCase().includes("malware") ||
incident.type.toLowerCase().includes("ddos")
){

setAlerts([
...alerts,
{ msg: "Cyber Alert: " + incident.type, status:"new"}
])

}
else{

setAlerts([
...alerts,
{ msg: "Incident in " + incident.zone, status:"new"}
])

}

};

/* ADD CYBER ALERT */

const addAlert = (alert) => {

setAlerts([
...alerts,
{ msg: alert.msg, status: "new" }
]);

setIncidents([
...incidents,
{
zone: "Cyber Zone",
type: alert.msg,
severity: "Critical"
}
]);

};

/* LOGIN PROTECTION */

if(!loggedIn){
return <Login setLoggedIn={setLoggedIn}/>
}

/* MAIN APP */

return (

<div style={{ display: "flex", fontFamily: "Arial" }}>

{/* SIDEBAR */}

<div
style={{
width: open ? "220px" : "0px",
background: "#0f172a",
color: "white",
height: "100vh",
padding: open ? "20px" : "0px",
overflow: "hidden",
transition: "0.3s"
}}
>

<h2>CityShield</h2>

<p style={{cursor:"pointer"}} onClick={()=>setPage("dashboard")}>Dashboard</p>
<p style={{cursor:"pointer"}} onClick={()=>setPage("incidents")}>Incidents</p>
<p style={{cursor:"pointer"}} onClick={()=>setPage("alerts")}>Alerts</p>
<p style={{cursor:"pointer"}} onClick={()=>setPage("devices")}>Devices</p>
<p style={{cursor:"pointer"}} onClick={()=>setPage("map")}>City Map</p>
<p style={{cursor:"pointer"}} onClick={()=>setPage("cctv")}>CCTV</p>
<p style={{cursor:"pointer"}} onClick={()=>setPage("cyber")}>Cyber Alerts</p>

{/* LOGOUT */}

<p
style={{cursor:"pointer",marginTop:"30px",color:"red"}}
onClick={()=>setLoggedIn(false)}
>
Logout
</p>

</div>

{/* PAGE CONTENT */}

<div style={{ flex: 1, padding: "20px" }}>

<div
style={{fontSize:"28px",cursor:"pointer",marginBottom:"10px"}}
onClick={()=>setOpen(!open)}
>
☰
</div>

{page === "dashboard" && <Dashboard incidents={incidents} />}

{page === "incidents" &&
<Incidents incidents={incidents} addIncident={addIncident} />}

{page === "alerts" &&
<Alerts alerts={alerts} />}

{page === "devices" && <Devices />}

{page === "map" &&
<MapPage incidents={incidents} />}

{page === "cctv" && <CCTV />}

{page === "cyber" &&
<CyberAlerts addAlert={addAlert} />}

</div>

</div>

);

}

export default App;