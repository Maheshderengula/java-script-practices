useEffect(() => {
  const fetchData = async () => {
    const [postsRes, commentsRes] = await Promise.all([
      fetch("/api/posts"),
      fetch("/api/comments")
    ]);
    const posts = await postsRes.json();
    const comments = await commentsRes.json();
    console.log({ posts, comments });
  };
  fetchData();
}, []);
