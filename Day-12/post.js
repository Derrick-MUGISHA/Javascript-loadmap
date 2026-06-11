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

    console.log(res);
    const json = await res.json();
    const data = await res.text();
    console.log(json);
    return res.json();
    // console.log(res)
  } catch (error) {
    console.log(error);
  }
}

await createPost({ title: "Derrick API test", body: "Derrick API test " });
