const form =
  document.getElementById(
    "registrationForm"
  );

const fullName =
  document.getElementById(
    "fullName"
  );

const email =
  document.getElementById(
    "email"
  );

const phone =
  document.getElementById(
    "phone"
  );

const password =
  document.getElementById(
    "password"
  );

const confirmPassword =
  document.getElementById(
    "confirmPassword"
  );

const eventCategory =
  document.getElementById(
    "eventCategory"
  );

const searchInput =
  document.getElementById(
    "searchInput"
  );

const filterCategory =
  document.getElementById(
    "filterCategory"
  );

/* ------------------------
   INITIALIZATION
------------------------ */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadTheme();

    renderParticipants();

    updateDashboard();

    loadDocumentInfo();
  }
);

/* ------------------------
   PASSWORD STRENGTH
------------------------ */

password.addEventListener(
  "input",
  () => {
    updateStrengthBar(
      password.value
    );
  }
);

/* ------------------------
   FORM SUBMIT
------------------------ */

form.addEventListener(
  "submit",
  e => {

    e.preventDefault();

    clearErrors();

    let valid = true;

    if (
      !validateName(
        fullName.value
      )
    ) {
      setError(
        "nameError",
        "Invalid name"
      );
      valid = false;
    }

    if (
      !validateEmail(
        email.value
      )
    ) {
      setError(
        "emailError",
        "Invalid email"
      );
      valid = false;
    }

    if (
      !validatePhone(
        phone.value
      )
    ) {
      setError(
        "phoneError",
        "Invalid phone"
      );
      valid = false;
    }

    if (
      !validatePassword(
        password.value
      )
    ) {
      setError(
        "passwordError",
        "Minimum 8 characters"
      );
      valid = false;
    }

    if (
      password.value !==
      confirmPassword.value
    ) {

      setError(
        "confirmError",
        "Passwords do not match"
      );

      valid = false;
    }

    if (
      !validateCategory(
        eventCategory.value
      )
    ) {
      setError(
        "categoryError",
        "Choose a category"
      );
      valid = false;
    }

    if (!valid) return;

    const participant = {
      id: Date.now(),
      name: fullName.value,
      email: email.value,
      phone: phone.value,
      category: eventCategory.value
    };

    Storage.addParticipant(
      participant
    );

    renderParticipants();

    updateDashboard();

    showToast(
      "Registration Successful"
    );

    form.reset();

    document.getElementById(
      "strengthBar"
    ).style.width = "0%";
  }
);

/* ------------------------
   SEARCH
------------------------ */

searchInput.addEventListener(
  "input",
  applyFilters
);

filterCategory.addEventListener(
  "change",
  applyFilters
);

function applyFilters() {

  const search =
    searchInput.value
      .toLowerCase();

  const category =
    filterCategory.value;

  let participants =
    Storage.getParticipants();

  participants =
    participants.filter(
      participant => {

        const matchesSearch =
          participant.name
            .toLowerCase()
            .includes(search);

        const matchesCategory =
          category === "all"
          || participant.category
          === category;

        return (
          matchesSearch &&
          matchesCategory
        );
      }
    );

  renderParticipants(
    participants
  );
}

/* ------------------------
   DELETE
------------------------ */

document.addEventListener(
  "click",
  e => {

    if (
      e.target.classList.contains(
        "delete-btn"
      )
    ) {

      const id =
        Number(
          e.target.dataset.id
        );

      Storage.deleteParticipant(
        id
      );

      renderParticipants();

      updateDashboard();

      showToast(
        "Participant Deleted"
      );
    }
  }
);

/* ------------------------
   HELPERS
------------------------ */

function setError(
  id,
  message
) {

  document.getElementById(
    id
  ).textContent = message;
}

function clearErrors() {

  document
    .querySelectorAll(".error")
    .forEach(error => {
      error.textContent = "";
    });
}