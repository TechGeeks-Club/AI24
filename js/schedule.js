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

// Informations des speakers
const speakersInfo = {
    "main-speaker": {
        title: "AI in Start-ups and Entrepreneurship",
        time: "12:30 AM",
        name: "John Doe",
        affiliation: "Stanford Artificial Intelligence Laboratory",
        bio: "Expert in AI applications for startups with 10+ years of experience. Published over 50 papers on machine learning applications in business."
    },
    "speaker-2": {
        title: "Advanced Machine Learning Techniques",
        time: "2:00 PM",
        name: "Jane Smith",
        affiliation: "Dijon University",
        bio: "Pioneer in neural networks and deep learning architectures. Recipient of the 2022 AI Innovation Award for her work on transformer models."
    },
    "speaker-3": {
        title: "Ethics in Artificial Intelligence",
        time: "3:30 PM",
        name: "Ahmed Khan",
        affiliation: "Guelma University",
        bio: "Leading researcher in AI ethics and responsible innovation. Chair of the Global AI Ethics Committee and author of 'Responsible AI Practices'."
    }
};

// Template du sous-programme avec affichage vertical
const subProgram = `
    <div class="banner">
        <div class="diagonal-line"></div>
        <div class="speakers-container">
            <!-- Speaker 1 -->
            <div class="speaker-item active" data-speaker="main-speaker">
                <img src="images/A profile pic for a professor at stanford university.png" class="speaker-image">
                <div class="speaker-info">
                    <div class="speaker-name">John Doe</div>
                    <div class="speaker-title">AI in Start-ups and Entrepreneurship</div>
                    <div class="speaker-time">12:30 AM</div>
                    <div class="speaker-affiliation">Stanford Artificial Intelligence Laboratory</div>
                    <div class="speaker-bio">Expert in AI applications for startups with 10+ years of experience...</div>
                </div>
            </div>
            
            <!-- Speaker 2 -->
            <div class="speaker-item" data-speaker="speaker-2">
                <img src="images/A profile pic for a Professor in dijon university.png" class="speaker-image">
                <div class="speaker-info">
                    <div class="speaker-name">Jane Smith</div>
                    <div class="speaker-title">Advanced Machine Learning Techniques</div>
                    <div class="speaker-time">2:00 PM</div>
                    <div class="speaker-affiliation">Dijon University</div>
                </div>
            </div>
            
            <!-- Speaker 3 -->
            <div class="speaker-item" data-speaker="speaker-3">
                <img src="images/A profile pic for a professor in Guelma university.png" class="speaker-image">
                <div class="speaker-info">
                    <div class="speaker-name">Ahmed Khan</div>
                    <div class="speaker-title">Ethics in Artificial Intelligence</div>
                    <div class="speaker-time">3:30 PM</div>
                    <div class="speaker-affiliation">Guelma University</div>
                </div>
            </div>
        </div>
    </div>
`;

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
    subProgramContainer.className = 'banner-container';
    subProgramContainer.innerHTML = subProgram;

    // Insérer le sous-programme après l'élément parent du bouton cliqué
    parentScheduleItem.insertAdjacentElement('afterend', subProgramContainer);

    // Configurer les écouteurs d'événements pour les speakers
    setupSpeakerEventListeners(subProgramContainer);
}

// Fonction pour configurer les écouteurs d'événements des speakers
function setupSpeakerEventListeners(container) {
    const speakerItems = container.querySelectorAll('.speaker-item');
    
    speakerItems.forEach(item => {
        item.addEventListener('click', function() {
            const speakerId = this.getAttribute('data-speaker');
            
            // Retirer la classe active de tous les éléments
            speakerItems.forEach(i => {
                i.classList.remove('active');
                // Réduire les infos des autres speakers
                const infoDiv = i.querySelector('.speaker-info');
                if (i !== this) {
                    infoDiv.innerHTML = `
                        <div class="speaker-name">${speakersInfo[i.getAttribute('data-speaker')].name}</div>
                        <div class="speaker-title">${speakersInfo[i.getAttribute('data-speaker')].title}</div>
                        <div class="speaker-time">${speakersInfo[i.getAttribute('data-speaker')].time}</div>
                        <div class="speaker-affiliation">${speakersInfo[i.getAttribute('data-speaker')].affiliation}</div>
                    `;
                }
            });
            
            // Ajouter la classe active à l'élément cliqué
            this.classList.add('active');
            
            // Mettre à jour les informations détaillées pour le speaker sélectionné
            const infoDiv = this.querySelector('.speaker-info');
            infoDiv.innerHTML = `
                <div class="speaker-name">${speakersInfo[speakerId].name}</div>
                <div class="speaker-title">${speakersInfo[speakerId].title}</div>
                <div class="speaker-time">${speakersInfo[speakerId].time}</div>
                <div class="speaker-affiliation">${speakersInfo[speakerId].affiliation}</div>
                <div class="speaker-bio">${speakersInfo[speakerId].bio}</div>
            `;
        });
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