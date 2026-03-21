async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const json = await res.json();
    console.log("Data:", json);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}
