function toggleMenu() {
  document.querySelector(".dropdown-menu").classList.toggle("active");
}
function closeToggleMenu() {
  document.querySelector(".dropdown-menu").classList.toggle("desactive");
}

document.querySelectorAll(".input-container input").forEach((input) => {
  input.addEventListener("input", function () {
    const checkmark = this.parentElement.querySelector(".checkmark");
    if (this.value.trim() !== "") {
      checkmark.style.display = "inline";
    } else {
      checkmark.style.display = "none";
    }
  });
});
var state = {
  top: "Hackathon",
  bottom: "Join Solo",
  isValidation: null,
  validationMessage: null,
};

const getContentId = (state) => {
  const contentItems = [
    {
      id: "Hackathon-join-solo",
      top: "Hackathon",
      bottom: "Join Solo",
      isValidation: false,
      validationMessage: null,
    },
    {
      id: "Hackathon-Join-a-team",
      top: "Hackathon",
      bottom: "Join a team",
      isValidation: false,
      validationMessage: null,
    },
    {
      id: "Hackathon-Join-a-team-password",
      top: "Hackathon",
      bottom: "Join a team",
      isValidation: false,
      validationMessage: null,
    },
    {
      id: "Hackathon-Create-a-team",
      top: "Hackathon",
      bottom: "Create a team",
      isValidation: false,
      validationMessage: null,
    },
  ];

  for (let i = 0; i < contentItems.length; i++) {
    if (
      (contentItems[i].bottom?.trim() || "") === (state.bottom?.trim() || "") &&
      (contentItems[i].top?.trim() || "") === (state.top?.trim() || "") &&
      (contentItems[i].isValidation === state.isValidation ||
        state.isValidation === null) &&
      contentItems[i].validationMessage === state.validationMessage
    ) {
      return contentItems[i].id;
    }
  }
  return null;
};

function showSection(id) {
  document.querySelectorAll(".section-right-content").forEach((div) => {
    div.classList.add("hidden");
  });

  if (id) {
    const target = document.getElementById(id);
    if (target) {
      target.classList.remove("hidden");
      target.style.display = "block";
    } else {
      // console.warn(`Element with id "${id}" not found.`);
    }
  }
}

const displayContent = (state) => {
  const id = getContentId(state);
  showSection(id);
};
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".bottom-buttons button");

  buttons[0].classList.add("active-border");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active-border"));

      button.classList.add("active-border");
    });
  });
});

document.getElementById("Join-a-team").addEventListener("click", () => {
  // console.log("state1", state);
  state.bottom = "Join a team";
  // console.log("state2", state);
  displayContent(state);
});
displayContent(state);
document.getElementById("backButton1").addEventListener("click", () => {
  showSection("Hackathon-join-solo");
  const buttons = document.querySelectorAll(".bottom-buttons button");
  // console.log("buttons", buttons);

  buttons[0].classList.add("active-border");
  buttons[1].classList.remove("active-border");
});

document.getElementById("backButton2").addEventListener("click", () => {
  showSection("Hackathon-join-solo");

  const buttons = document.querySelectorAll(".bottom-buttons button");
  // console.log("buttons", buttons);

  buttons[0].classList.add("active-border");
  buttons[1].classList.remove("active-border");
});

document.getElementById("backButton3").addEventListener("click", () => {
  showSection("Hackathon-Join-a-team");

  const buttons = document.querySelectorAll(".bottom-buttons button");
  // console.log("buttons", buttons);

  buttons[1].classList.add("active-border");
  buttons[0].classList.remove("active-border");
});

document.getElementById("next-join-solo").addEventListener("click", () => {
  if (validateHackathonForm("you must set all inputs"))
    showSection("hackaton-solo-validation");
});

document.getElementById("next-join-team").addEventListener("click", () => {
  const value = document.getElementById("team-name-input").value.trim();
  if (!validateHackathonForm("you must set all inputs and team name")) {
    showSection("Hackathon-join-solo");
    const buttons = document.querySelectorAll(".bottom-buttons button");
    buttons[0].classList.add("active-border");
    buttons[1].classList.remove("active-border");
  }
  if (value.length < 2) {
    document.getElementById("error-join-team").style.display = "flex";
  } else {
    showSection("hackaton-team-validation");
    isSolo = false;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".section-right-header button");

  // Ensure there are buttons before modifying classes
  if (buttons.length > 0) {
    buttons[0].classList.remove("section-right-header-buttons");
    buttons[0].classList.add("button-clicked");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("button-clicked");
        btn.classList.add("section-right-header-buttons");
      });
      button.classList.add("button-clicked");
    });
  });
});
var isSolo = true;
const hackatonFormInputs = [
  { myId: "firstname", googleFormId: "entry.795312543", isRequired: true },
  { myId: "lastname", googleFormId: "entry.1970057594", isRequired: true },
  { myId: "email", googleFormId: "entry.607219518", isRequired: true },
  { myId: "phone", googleFormId: "entry.2068080515", isRequired: true },
  { myId: "university", googleFormId: "entry.720148164", isRequired: true },
  { myId: "fieldofstudy", googleFormId: "entry.1177827940", isRequired: true },
  { myId: "academiclevel", googleFormId: "entry.1013254986", isRequired: true },
  { myId: "company", googleFormId: "entry.535972816", isRequired: true },
  { myId: "residence", googleFormId: "entry.1346684524", isRequired: true },
  { myId: "github", googleFormId: "entry.1469628877", isRequired: false },
  { myId: "linkedin", googleFormId: "entry.2095107968", isRequired: false },
  { myId: "skills", googleFormId: "entry.91360857", isRequired: true },
  { myId: "experience", googleFormId: "entry.1321980119", isRequired: true },
  { myId: "motivation", googleFormId: "entry.1429805093", isRequired: true },
];
const hackatonFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSfXuWcytiPjutkJVNOzP12RHpde88ydfeptdBWCbXa5k3cEog/formResponse";
function validateHackathonForm(message) {
  for (const input of hackatonFormInputs) {
    if (input.isRequired) {
      const value = document.getElementById(input.myId)?.value.trim();
      if (!value) {
        Toastify({
          text: message,
          duration: 2000,
          gravity: "top",
          position: "center",
          backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)", // Red gradient for error
          stopOnFocus: true,
          close: true,
          callback: function () {
            location.reload(); // Reloads the page after the toast disappears
          },
        }).showToast();
        return false;
      }
    }
  }
  return true;
}

async function submitHackathonForm() {
  const formData = new FormData();

  hackatonFormInputs.forEach((input) => {
    const value = document.getElementById(input.myId)?.value.trim();
    if (value) {
      formData.append(input.googleFormId, value);
    }
  });
  if (isSolo) formData.append("entry.214270301", "solo");
  else
    formData.append(
      "entry.214270301",
      document.getElementById("team-name-input")?.value.trim()
    );

  try {
    const response = await fetch(hackatonFormLink, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    const buttons = document.querySelectorAll(".bottom-buttons button");
    buttons[0].classList.add("active-border");
    buttons[1].classList.remove("active-border");
    isSolo = true;
    Toastify({
      text: "You are registered successfully ✅",
      duration: 2000,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      stopOnFocus: true,
      close: true,
      callback: function () {
        location.reload();
      },
    }).showToast();
  } catch (error) {
    Toastify({
      text: "Registration failed ❌",
      duration: 2000,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)", // Red gradient for error
      stopOnFocus: true,
      close: true,
      callback: function () {
        location.reload();
      },
    }).showToast();
  }
}
const hideErrorMessage = () => {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((msg) => {
    msg.style.display = "none";
  });
};

const returnToDefaultState = () => {
  const myInputs = [
    "firstname",
    "lastname",
    "email",
    "phone",
    "university",
    "fieldofstudy",
    "academiclevel",
    "company",
    "residence",
    "github",
    "linkedin",
    "skills",
    "experience",
    "motivation",
    "team-name-input",
  ];
  for (imp of myInputs) {
    document.getElementById(imp).value = "";
  }
  showSection("Hackathon-join-solo");
};

var workshopId = null;
const workshopsData = [
  {
    idForm: 0,
    title: "Intro to JavaScript",
    description:
      "Learn the basics of JavaScript and how to build interactive web pages.",
    date: "June 20, 2025 - 10:00 AM",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScEYLpFkCX_rbu0Gn7m_Qem4swV7tgndHINKQLALyVnRRJJ6Q/formResponse",
    inputs: [
      { myId: "firstname", googleFormId: "entry.497043887", isRequired: true },
      { myId: "lastname", googleFormId: "entry.760498177", isRequired: true },
      { myId: "email", googleFormId: "entry.949663347", isRequired: true },
      { myId: "phone", googleFormId: "entry.221371961", isRequired: true },
      { myId: "university", googleFormId: "entry.320736804", isRequired: true },
      {
        myId: "fieldofstudy",
        googleFormId: "entry.1704422940",
        isRequired: true,
      },
      {
        myId: "academiclevel",
        googleFormId: "entry.1157517074",
        isRequired: true,
      },
      { myId: "company", googleFormId: "entry.2079021364", isRequired: true },
    ],
  },
];
const workshopsContainer = document.getElementById("worckshops-container");
workshopsContainer.innerHTML = workshopsData
  .map(
    (workshop) => `
        <div
                style="height: 70px; width: 100%;  display: flex; justify-content: space-between; flex-direction: column;">
                <div style="height: 25px;  display: flex; justify-content: space-between ; flex-direction: column;">
                  <div style="display: flex; justify-content: space-between; align-items: center; padding-left: 10px; padding-right: 10px;">
                    <h4 style="color:#FFFFFF; font-size: 13px;">${workshop.title}</h4>
                    <p style="color:#FFFFFF; font-size: 10px;">${workshop.date}</p>
                    <button class="join-btn" onclick="handleJoin(${workshop.idForm})">join</button>
                  </div>
                  <div style="height: 1px; width: 100%; background-color: #FFFFFF;"></div>
                </div>
                <div style="height: 50px; padding: 10px; padding-right: 20px;">
                  <p class="workshpe-description ">
                    ${workshop.description}
                </p>
                </div>
              </div>
`
  )
  .join("");
showSection("Hackathon-join-solo");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hackaton-btn").addEventListener("click", () => {
    showSection("Hackathon-join-solo");
  });

  document.getElementById("Workshops-btn").addEventListener("click", () => {
    showSection("Workshops-items");
  });

  document.getElementById("Best-idea-btn").addEventListener("click", () => {
    showSection("Best-idea-rools");
  });
});

const handleJoin = (id) => {
  workshopId = id;

  for (const input of workshopsData[workshopId].inputs) {
    const value = document.getElementById(input.myId)?.value.trim();
    if (!value) {
      Toastify({
        text: "You must fill in all inputs ❌",
        duration: 2000,
        gravity: "top",
        position: "center",
        backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)", // Red gradient for error
        stopOnFocus: true,
        close: true,
      }).showToast();

      return;
    }
  }

  showSection("Workshops-rools");
  document.getElementById("Workshops-validation").style.display = "flex";
};

const backWorkshopValidation = () => {
  showSection("Workshops-rools");
};

WorkshopsRulesNext = () => {
  const confirmPcCheckbox = document.getElementById("confirm-pc");
  const commitAttendanceCheckbox = document.getElementById("commit-attendance");

  if (!confirmPcCheckbox.checked || !commitAttendanceCheckbox.checked) {
    Toastify({
      text: "Please check both boxes before proceeding ❌",
      duration: 2000,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)", // Red gradient for error
      stopOnFocus: true,
      close: true,
    }).showToast();
  } else {
    showSection("Workshops-validation");
  }
};

const backWorksopRools = () => {
  showSection("Workshops-items");
};

const handleSubmitWorkshopForm = async () => {
  if (workshopId === null) return;
  const formData = new FormData();

  workshopsData[workshopId].inputs.forEach((input) => {
    const value = document.getElementById(input.myId)?.value.trim();
    if (value) {
      formData.append(input.googleFormId, value);
    } else {
      Toastify({
        text: "you must set all inputs ❌",
        duration: 2000,
        gravity: "top",
        position: "center",
        backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)", // Red gradient for error
        stopOnFocus: true,
        close: true,
      }).showToast();
      showSection("Hackathon-join-solo");
      return;
    }
  });

  try {
    const response = await fetch(workshopsData[workshopId].link, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });
    workshopId = null;
    const buttons = document.querySelectorAll(".bottom-buttons button");
    buttons[0].classList.add("active-border");
    buttons[1].classList.remove("active-border");
    isSolo = true;
    Toastify({
      text: "You are registered successfully ✅",
      duration: 2000,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      stopOnFocus: true,
      close: true,
      callback: function () {
        location.reload();
      },
    }).showToast();
  } catch (error) {
    Toastify({
      text: "Registration failed ❌",
      duration: 2000,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)", // Red gradient for error
      stopOnFocus: true,
      close: true,
      callback: function () {
        location.reload();
      },
    }).showToast();
  }
};

const handleBestIdeaRulesNext = () => {
  showSection("Best-idea-registration");
};

const bestIdeaRegistrationBack = () => {
  showSection("Best-idea-rools");
};

const bestIdeaGoogleFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfRiIGSIycuKwx301sT7MyqQ0xY5jTHOdU5pkwS0fFcgER2Ag/formResponse";
const bestIdeaFormInputs = [
  { myId: "firstname", googleFormId: "entry.84305315", isRequired: true },
  { myId: "lastname", googleFormId: "entry.1425555344", isRequired: true },
  { myId: "email", googleFormId: "entry.1422391609", isRequired: true },
  { myId: "phone", googleFormId: "entry.2068080515", isRequired: true }, // Not in the form, kept as is
  { myId: "university", googleFormId: "entry.1084636349", isRequired: true },
  { myId: "fieldofstudy", googleFormId: "entry.1705701734", isRequired: true },
  { myId: "academiclevel", googleFormId: "entry.1968921305", isRequired: true },
  { myId: "company", googleFormId: "entry.786298061", isRequired: true },
  {
    myId: "google-drive-url",
    googleFormId: "entry.2045127902",
    isRequired: true,
  },
  {
    myId: "Team-members-input",
    googleFormId: "entry.1610022562",
    isRequired: true,
  },
];

const handleCancelBtn = () => {
  location.reload();
};
const bestIdeaRegistrationNext = () => {
  let isValid = true;

  bestIdeaFormInputs.forEach((input) => {
    const value = document.getElementById(input.myId)?.value.trim();
    if (input.isRequired && !value) {
      isValid = false;
    }
  });

  if (!isValid) {
    Toastify({
      text: `Please fill in all required fields ❌`,
      duration: 2000,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)", // Red gradient for error
      stopOnFocus: true,
      close: true,
    }).showToast();
    return;
  }

  // If all inputs are valid, proceed to the next step
  showSection("Best-idea-validation");
};

const backWorBEstIdeaValidation = () => {
  showSection("Best-idea-registration");
};

const handleSubmitBestIdeaForm = () => {
  let formData = new FormData();
  let isValid = true;

  bestIdeaFormInputs.forEach((input) => {
    const value = document.getElementById(input.myId)?.value.trim();
    if (!value) {
      isValid = false;
      Toastify({
        text: `Please fill in all required fields ❌`,
        duration: 2000,
        gravity: "top",
        position: "center",
        backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)", // Red gradient for error
        stopOnFocus: true,
        close: true,
      }).showToast();
      return;
    }
    formData.append(input.googleFormId, value);
  });

  if (!isValid) return;

  fetch(bestIdeaGoogleFormUrl, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      Toastify({
        text: "Form submitted successfully ✅",
        duration: 2000,
        gravity: "top",
        position: "center",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Green gradient for success
        stopOnFocus: true,
        close: true,
        callback: () => {
          location.reload();
        },
      }).showToast();
      setTimeout(() => {
        location.reload();
      }, 2000);
    })
    .catch(() => {
      Toastify({
        text: "Error submitting the form ❌",
        duration: 2000,
        gravity: "top",
        position: "center",
        backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)", // Red gradient for error
        stopOnFocus: true,
        close: true,
      }).showToast();
    });
};
