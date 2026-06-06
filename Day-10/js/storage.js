const STORAGE_KEY = "eventParticipants";

const Storage = {
  getParticipants() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveParticipants(participants) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(participants)
    );
  },

  addParticipant(participant) {
    const participants = this.getParticipants();
    participants.push(participant);
    this.saveParticipants(participants);
  },

  deleteParticipant(id) {
    const participants = this.getParticipants()
      .filter(p => p.id !== id);

    this.saveParticipants(participants);
  },

  updateParticipant(updatedParticipant) {
    const participants = this.getParticipants();

    const updated = participants.map(p =>
      p.id === updatedParticipant.id
        ? updatedParticipant
        : p
    );

    this.saveParticipants(updated);
  }
};