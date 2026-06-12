async function auth(payload) {
  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        'Authorization': `Bearer token`,
        "Content-Type": "application/json",
        "x-custom-header": 'custom value',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

await auth({ username: "emilys", password: "emilyspass" });
