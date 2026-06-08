function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show-toast");

  setTimeout(() => {
    toast.classList.remove("show-toast");
  }, 3000);
}

function animateCounter(
  elementId,
  target
) {

  const element =
    document.getElementById(elementId);

  let current = 0;

  const interval =
    setInterval(() => {

      current++;

      element.textContent = current;

      if (current >= target) {
        clearInterval(interval);
      }

    }, 20);
}