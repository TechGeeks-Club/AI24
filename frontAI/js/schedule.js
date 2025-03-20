// Définir les programmes pour chaque jour
const schedules = {
    day1: `
   <div class="schedule-item">
      <div class="time">9:00 AM - 10:00 AM</div>
      <div class="event-details">
          <div class="event-title">Opening Ceremony</div>
      </div>
  </div>

  <div class="schedule-item">
      <div class="time">10:30 AM - 12:30 PM</div>
      <div class="event-details">
          <div class="event-title">AI Conferences</div>
          <div class="event-description">
              3 exciting conferences presented by well known figures in the world of artificial intelligence; <span class="highlight">open to everyone</span>
          </div>
      </div>
      <button class="arrow-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="12 19 12 5"></polyline> 
            <polyline points="6 11 12 5 18 11"></polyline>
        </svg>
    </button>
    
  </div>

  <div class="schedule-item">
      <div class="time">2:00 PM - 4:00 PM</div>
      <div class="event-details">
          <div class="event-title">AI Workshops</div>
          <div class="event-description">
              4 different workshops, each staring an interesting ai related topic, don't miss out!
          </div>
      </div>
      <button class="arrow-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="12 19 12 5"></polyline> 
            <polyline points="6 11 12 5 18 11"></polyline>
        </svg>
    </button>    
  </div>

  <div class="schedule-item">
      <div class="time">4:30 PM</div>
      <div class="event-details">
          <div class="event-title">Hackathon Launch</div>
          <div class="event-description">
              Teams of up to 5 members will compete to develop AI solutions over 48 hours.
          </div>
      </div>
      <button class="arrow-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="12 19 12 5"></polyline> 
            <polyline points="6 11 12 5 18 11"></polyline>
        </svg>
    </button>    
  </div>
    `,
    day2: `
        <div class="schedule-item">
            <div class="time">9:00 AM - 10:00 AM</div>
            <div class="event-details">
                <div class="event-title">Day 2 - Workshop 1</div>
                <div class="event-description">
                    Workshop on advanced AI techniques.
                </div>
            </div>
        </div>
        <div class="schedule-item">
            <div class="time">10:30 AM - 12:30 PM</div>
            <div class="event-details">
                <div class="event-title">Day 2 - Conference</div>
                <div class="event-description">
                    Keynote speech by a renowned AI researcher.
                </div>
            </div>
        </div>
    `,
    day3: `
        <div class="schedule-item">
            <div class="time">9:00 AM - 10:00 AM</div>
            <div class="event-details">
                <div class="event-title">Day 3 - Final Presentations</div>
                <div class="event-description">
                    Teams present their AI solutions.
                </div>
            </div>
        </div>
        <div class="schedule-item">
            <div class="time">10:30 AM - 12:30 PM</div>
            <div class="event-details">
                <div class="event-title">Day 3 - Closing Ceremony</div>
                <div class="event-description">
                    Awards and closing remarks.
                </div>
            </div>
        </div>
    `
};

// Sélectionner le conteneur du programme
const scheduleContainer = document.querySelector('.schedule-container');

// Afficher le programme du premier jour par défaut
scheduleContainer.innerHTML = schedules.day1;

// Sélectionner tous les boutons "Day"
const dayButtons = document.querySelectorAll('.btn-right-div');

// Ajouter un écouteur d'événements à chaque bouton
dayButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Récupérer le jour sélectionné (Day 1, Day 2, etc.)
        const day = `day${index + 1}`;

        // Mettre à jour le contenu du conteneur avec le programme correspondant
        scheduleContainer.innerHTML = schedules[day];
    });
});