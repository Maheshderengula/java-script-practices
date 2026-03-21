function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "Alice", message: "Hello!" }),
      headers: { "Content-Type": "application/json" }
    });
    const result = await res.json();
    alert(`Server says: ${result.status}`);
  };

  return <button onClick={handleSubmit}>Send</button>;
}
