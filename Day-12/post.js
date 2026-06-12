async function createPost(payload) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    return res.json();

  } catch (error) {
    console.log(error);
  }
}

await createPost({ title: "Derrick API test", body: "Derrick API test " });
