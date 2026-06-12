async function patch(id, payload) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json(); //readable data
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}


await patch(1, {
  title: "foo",
  body: "bar",
  userId: 1,
})
