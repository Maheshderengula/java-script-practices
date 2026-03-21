const handleClick = async () => {
  const res = await fetch("/api/submit");
  const result = await res.json();
  console.log(result);
};
