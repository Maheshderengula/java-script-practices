const handleSubmit = async () => {
  try {
    const res = await fetch("/api/submit", { method: "POST" });
    const result = await res.json();
    alert("Success: " + result.message);
  } catch (err) {
    alert("Submission failed: " + err.message);
  }
};
