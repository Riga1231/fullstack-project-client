import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {
  const [counter, setCounter] = useState(null);

  const fetchCounter = async () => {
    const res = await fetch(`${API_URL}/api/counter`);
    const data = await res.json();
    setCounter(data.counter);
  };

  const incrementCounter = async () => {
    const res = await fetch(`${API_URL}/api/counter/increment`, {
      method: "POST",
    });
    const data = await res.json();
    setCounter(data.counter);
  };

  useEffect(() => {
    fetchCounter();
  }, []);

  return (
    <div>
      <h1>Backend Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default App;
