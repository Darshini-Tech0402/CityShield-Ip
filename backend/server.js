const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample data for incidents, devices
let incidents = [
  {id:1, zone:'Kukatpally', type:'Motion Detected CCTV', severity:'High', time:'2026-03-12 23:00'},
  {id:2, zone:'Hitech City', type:'DDoS Attack', severity:'Critical', time:'2026-03-12 22:45'}
];

app.get('/api/incidents', (req, res) => res.json(incidents));
app.post('/api/incidents', (req, res) => {
  const newIncident = {id: incidents.length+1, ...req.body, time: new Date().toISOString()};
  incidents.push(newIncident);
  res.json(newIncident);
});

app.get('/api/zones', (req, res) => {
  // Your 75 zones data
  res.json([{name:'Kukatpally', incidents:5}, {name:'Banjara Hills', incidents:3}]);
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
app.get('/', (req, res) => {
  res.send('CityShield backend running');
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});