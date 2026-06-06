function createParticipantCard(participant) {

  const card = document.createElement("div");

  card.className = "participant-card fade-in";

  card.innerHTML = `
    <h3>${participant.name}</h3>

    <p><strong>Email:</strong>
    ${participant.email}</p>

    <p><strong>Phone:</strong>
    ${participant.phone}</p>

    <p><strong>Category:</strong>
    ${participant.category}</p>

    <div class="card-actions">

      <button
        class="edit-btn"
        data-id="${participant.id}">
        Edit
      </button>

      <button
        class="delete-btn"
        data-id="${participant.id}">
        Delete
      </button>

    </div>
  `;

  return card;
}

function renderParticipants(
  participants = Storage.getParticipants()
) {

  const container = document.getElementById(
      "participantsList"
    );

  container.innerHTML = "";

  if (participants.length === 0) {

    container.innerHTML = `
      <p>No participants found.</p>
    `;

    return;
  }

  participants.forEach(participant => {
    container.appendChild(
      createParticipantCard(participant)
    );
  });
}