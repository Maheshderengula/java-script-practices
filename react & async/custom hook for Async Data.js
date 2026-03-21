import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [url]);

  return data;
}

// Usage
function App() {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos/1");
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
