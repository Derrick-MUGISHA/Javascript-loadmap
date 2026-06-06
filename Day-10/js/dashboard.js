function updateDashboard() {

  const participants =  Storage.getParticipants();

  document.getElementById(
    "totalRegistrations"
  ).textContent = participants.length;

  const frontend =
    participants.filter(
      p => p.category ===
      "Frontend Bootcamp"
    ).length;

  const backend =
    participants.filter(
      p => p.category ===
      "Backend Workshop"
    ).length;

  const design =
    participants.filter(
      p => p.category ===
      "UI/UX Design"
    ).length;

  document.getElementById(
    "frontendCount"
  ).textContent = frontend;

  document.getElementById(
    "backendCount"
  ).textContent = backend;

  document.getElementById(
    "designCount"
  ).textContent = design;
}