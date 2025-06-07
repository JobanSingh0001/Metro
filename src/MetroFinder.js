import React, { useState } from "react";

// Metro graph representing stations, distances (km), and time (minutes)
const metroGraph = {
  "Noida Sector 62~B": { "Botanical Garden~B": { distance: 8, time: 12 } },
  "Botanical Garden~B": {
    "Noida Sector 62~B": { distance: 8, time: 12 },
    "Yamuna Bank~B": { distance: 10, time: 15 },
  },
  "Yamuna Bank~B": {
    "Botanical Garden~B": { distance: 10, time: 15 },
    "Vaishali~B": { distance: 8, time: 12 },
    "Rajiv Chowk~BY": { distance: 6, time: 10 },
  },
  "Vaishali~B": { "Yamuna Bank~B": { distance: 8, time: 12 } },
  "Rajiv Chowk~BY": {
    "Yamuna Bank~B": { distance: 6, time: 10 },
    "Moti Nagar~B": { distance: 9, time: 14 },
    "New Delhi~YO": { distance: 1, time: 2 },
  },
  "Moti Nagar~B": {
    "Rajiv Chowk~BY": { distance: 9, time: 14 },
    "Janak Puri West~BO": { distance: 7, time: 10 },
    "Rajouri Garden~BP": { distance: 2, time: 3 },
  },
  "Janak Puri West~BO": {
    "Moti Nagar~B": { distance: 7, time: 10 },
    "Dwarka Sector 21~B": { distance: 6, time: 8 },
  },
  "Dwarka Sector 21~B": { "Janak Puri West~BO": { distance: 6, time: 8 } },
  "Huda City Center~Y": { "Saket~Y": { distance: 15, time: 20 } },
  "Saket~Y": {
    "Huda City Center~Y": { distance: 15, time: 20 },
    "AIIMS~Y": { distance: 6, time: 8 },
  },
  "AIIMS~Y": {
    "Saket~Y": { distance: 6, time: 8 },
    "Rajiv Chowk~BY": { distance: 7, time: 10 },
  },
  "New Delhi~YO": {
    "Rajiv Chowk~BY": { distance: 1, time: 2 },
    "Chandni Chowk~Y": { distance: 2, time: 3 },
    "Shivaji Stadium~O": { distance: 2, time: 4 },
  },
  "Chandni Chowk~Y": {
    "New Delhi~YO": { distance: 2, time: 3 },
    "Vishwavidyalaya~Y": { distance: 5, time: 8 },
  },
  "Vishwavidyalaya~Y": { "Chandni Chowk~Y": { distance: 5, time: 8 } },
  "Shivaji Stadium~O": {
    "New Delhi~YO": { distance: 2, time: 4 },
    "DDS Campus~O": { distance: 7, time: 10 },
  },
  "DDS Campus~O": {
    "Shivaji Stadium~O": { distance: 7, time: 10 },
    "IGI Airport~O": { distance: 8, time: 12 },
  },
  "IGI Airport~O": { "DDS Campus~O": { distance: 8, time: 12 } },
  "Rajouri Garden~BP": {
    "Moti Nagar~B": { distance: 2, time: 3 },
    "Punjabi Bagh West~P": { distance: 2, time: 3 },
  },
  "Punjabi Bagh West~P": {
    "Rajouri Garden~BP": { distance: 2, time: 3 },
    "Netaji Subhash Place~PR": { distance: 3, time: 5 },
  },
  "Netaji Subhash Place~PR": {
    "Punjabi Bagh West~P": { distance: 3, time: 5 },
  },
};

// Dijkstra's Algorithm for Distance or Time
const findShortestPath = (graph, start, end, criterion = "distance") => {
  const distances = {};
  const visited = new Set();
  const previous = {};
  const pq = new Map();

  for (let node in graph) {
    distances[node] = Infinity;
    pq.set(node, Infinity);
  }
  distances[start] = 0;
  pq.set(start, 0);

  while (pq.size > 0) {
    const [currentNode] = [...pq.entries()].reduce((min, entry) =>
      entry[1] < min[1] ? entry : min
    );
    pq.delete(currentNode);
    visited.add(currentNode);

    if (currentNode === end) break;

    for (let neighbor in graph[currentNode]) {
      if (visited.has(neighbor)) continue;

      const newDistance =
        distances[currentNode] + graph[currentNode][neighbor][criterion];
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = currentNode;
        pq.set(neighbor, newDistance);
      }
    }
  }

  const path = [];
  let current = end;
  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return { path, distance: distances[end] };
};

// Main MetroFinder Component
const MetroFinder = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [criterion, setCriterion] = useState("distance");
  const [route, setRoute] = useState([]);
  const [distance, setDistance] = useState(null);

  const stations = Object.keys(metroGraph);

  const handleFindRoute = () => {
    if (source === destination) {
      alert("Source and destination cannot be the same.");
      return;
    }

    const { path, distance } = findShortestPath(
      metroGraph,
      source,
      destination,
      criterion
    );
    setRoute(path);
    setDistance(distance);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <nav
        style={{
          backgroundColor: "#007bff",
          padding: "10px 20px",
          color: "white",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "24px" }}>Metro Route Finder</h1>
      </nav>
      <header
        style={{
          textAlign: "center",
          padding: "20px 0",
          backgroundColor: "#e9ecef",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h2 style={{ margin: 0 }}>Find the Shortest Metro Route</h2>
      </header>
      <main
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ margin: "20px 0" }}>
          <label style={{ fontWeight: "bold" }}>Source Station:</label>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <option value="">Select Source</option>
            {stations.map((station) => (
              <option key={station} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>
        <div style={{ margin: "20px 0" }}>
          <label style={{ fontWeight: "bold" }}>Destination Station:</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <option value="">Select Destination</option>
            {stations.map((station) => (
              <option key={station} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>
        <div style={{ margin: "20px 0" }}>
          <label style={{ fontWeight: "bold" }}>Find By:</label>
          <select
            value={criterion}
            onChange={(e) => setCriterion(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <option value="distance">Distance</option>
            <option value="time">Time</option>
          </select>
        </div>
        <button
          onClick={handleFindRoute}
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Find Shortest Route
        </button>
        <div
          style={{
            margin: "20px 0",
            padding: "15px",
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        >
          <h2 style={{ color: "#333", margin: 0 }}>Shortest Route</h2>
          <p style={{ margin: "10px 0", fontSize: "16px", lineHeight: "1.5" }}>
            {route.join(" → ")}
          </p>
          {distance !== null && (
            <h3 style={{ margin: 0, fontSize: "18px", color: "#555" }}>
              Total {criterion === "distance" ? "Distance" : "Time"}: {distance}{" "}
              {criterion === "distance" ? "km" : "minutes"}
            </h3>
          )}
        </div>
      </main>
    </div>
  );
};

export default MetroFinder;
