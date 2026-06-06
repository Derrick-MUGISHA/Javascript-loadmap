function validateName(name) {
  return name.trim().length >= 3;
}

function validateEmail(email) {
  const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(email);
}

function validatePhone(phone) {
  return /^[0-9]{10}$/.test(phone);
}

function validatePassword(password) {
  return password.length >= 8;
}

function validateCategory(category) {
  return category !== "";
}

function passwordStrength(password) {

  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  return score;
}

function updateStrengthBar(password) {

  const bar =
    document.getElementById("strengthBar");

  const score =
    passwordStrength(password);

  const widths = [0, 25, 50, 75, 100];

  bar.style.width = widths[score] + "%";

  if (score <= 1)
    bar.style.background = "crimson";

  else if (score <= 2)
    bar.style.background = "orange";

  else
    bar.style.background = "limegreen";
}