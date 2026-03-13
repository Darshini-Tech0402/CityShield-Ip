import React, { useState } from "react";

function Login({ setLoggedIn }) {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleLogin = () => {

if (username === "admin" && password === "admin123") {
setLoggedIn(true);
} 
else {
setError("Invalid Admin Credentials");
}

};

return (

<div style={{
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "100vh",
background: "#0f172a",
color: "white"
}}>

<div style={{
background: "#1e293b",
padding: "40px",
borderRadius: "10px",
width: "320px"
}}>

<h2 style={{ textAlign: "center" }}>
ADMIN LOGIN
</h2>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e) => setUsername(e.target.value)}
style={{
width: "100%",
padding: "10px",
marginTop: "15px"
}}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
style={{
width: "100%",
padding: "10px",
marginTop: "10px"
}}
/>

<button
onClick={handleLogin}
style={{
width: "100%",
padding: "10px",
marginTop: "15px",
background: "#2563eb",
color: "white",
border: "none",
cursor: "pointer"
}}
>
Login
</button>

<p style={{ color: "red", marginTop: "10px" }}>
{error}
</p>

</div>

</div>

);

}

export default Login;