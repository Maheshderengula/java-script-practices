async function getData() {
  const response = await fetch("https://api.example.com/data");
  const json = await response.json();
  console.log(json);
}
