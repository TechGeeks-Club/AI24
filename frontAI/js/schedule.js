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

        // Réattacher les écouteurs d'événements aux nouveaux boutons arrow-button
        attachArrowButtonListeners();
    });
});

// Définir le sous-programme
const subProgram = `
    <div class="banner">
        <button class="close-button">×</button>
        <div class="diagonal-line"></div>
        <div class="content">
            <div class="speaker-main">
                <img src="images/A profile pic for a professor at stanford university.png" alt="Main Speaker">
            </div>
            
            <div class="info">
                <div class="titre">AI in Start-ups and Entrepreneurship</div>
                <div class="details">
                    <span>Time: 12:30 AM</span>
                    <span>Speaker: John Doe</span>
                    <span>Stanford Artificial Intelligence Laboratory</span>
                </div>
            </div>
            
            <div class="other-speakers">
                <div class="speaker-small">
                    <img src="images/A profile pic for a Professor in dijon university.png" alt="Speaker 2">
                </div>
                <div class="speaker-small">
                    <img src="images/A profile pic for a professor in Guelma university.png" alt="Speaker 3">
                </div>
            </div>
        </div>
    </div>
`;

// Fonction pour afficher le sous-programme
function showSubProgram(event) {
    // Vérifier si un sous-programme est déjà affiché pour cet élément
    const parentScheduleItem = event.target.closest('.schedule-item');
    const existingSubProgram = parentScheduleItem.nextElementSibling;
    
    // Si un sous-programme existe déjà, on le supprime
    if (existingSubProgram && existingSubProgram.classList.contains('banner-container')) {
        existingSubProgram.remove();
        return;
    }
    
    // Créer un conteneur pour le sous-programme
    const subProgramContainer = document.createElement('div');
    subProgramContainer.className = 'banner-container'; // Ajouter une classe pour identification
    subProgramContainer.innerHTML = subProgram;

    // Insérer le sous-programme après l'élément parent du bouton cliqué
    parentScheduleItem.insertAdjacentElement('afterend', subProgramContainer);

    // Ajouter un écouteur d'événements au bouton de fermeture
    const closeButton = subProgramContainer.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        subProgramContainer.remove(); // Supprimer le sous-programme
    });
}

// Fonction pour attacher les écouteurs d'événements aux boutons arrow-button
function attachArrowButtonListeners() {
    document.querySelectorAll('.arrow-button').forEach(button => {
        // Supprimer d'abord les écouteurs existants pour éviter les doublons
        button.removeEventListener('click', showSubProgram);
        // Ajouter le nouvel écouteur
        button.addEventListener('click', showSubProgram);
    });
}

// Attacher les écouteurs d'événements aux boutons arrow-button au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    attachArrowButtonListeners();
});