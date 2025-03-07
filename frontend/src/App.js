import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchGreeting = async () => {
    try {
      const response = await axios.get(`https://greeting-44b6.onrender.com/api/greet?name=${name}`);
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setMessage("");
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Greeting App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={fetchGreeting}>Get Greeting</button>
      {message && <h2>{message}</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
    </div>
  );
}

export default App;
