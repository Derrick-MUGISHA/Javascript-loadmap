const promise = new Promise((resolve, reject) => {
  const ok = false;
  setTimeout(() => {
    if (ok) resolve("Success!");
    else reject(new Error("Failed"));
  }, 500);
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
