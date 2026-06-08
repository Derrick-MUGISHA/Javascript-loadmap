const themeBtn =
  document.getElementById(
    "themeToggle"
  );

function loadTheme() {

  const saved =
    localStorage.getItem("theme");

  if (saved === "dark") {

    document.body.classList.add(
      "dark"
    );

    themeBtn.textContent =
      "☀️ Light Mode";
  }
}

themeBtn.addEventListener(
  "click",
  () => {

    document.body.classList.toggle(
      "dark"
    );

    const isDark =
      document.body.classList.contains(
        "dark"
      );

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );

    themeBtn.textContent =
      isDark
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
  }
);