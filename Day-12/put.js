async function updatePost(id, payload) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();

    console.log(data);

    return data;
  } catch (error) {}
}

await updatePost(1, { title: "Derrick API test", body: "Derrick API test " });
