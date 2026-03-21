async function loadResources() {
  try {
    const [usersRes, postsRes] = await Promise.all([
      fetch("/api/users"),
      fetch("/api/posts")
    ]);
    const users = await usersRes.json();
    const posts = await postsRes.json();
    console.log({ users, posts });
  } catch (err) {
    console.error("Error loading resources:", err);
  }
}
