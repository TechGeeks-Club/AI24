// Définir les programmes pour chaque jour avec des speakers spécifiques
const schedules = {
    day1: `
        <div class="schedule-item">
            <div class="time">8:00 AM - 8:30 AM</div>
            <div class="event-details">
                <div class="event-title">Welcome and registration</div>
            </div>
        </div>

        <div class="schedule-item">
            <div class="time">08:30 AM - 09:30 AM</div>
            <div class="event-details">
                <div class="event-title">Opening Ceremony</div>
                <div class="event-description">
                    Hosted by the university administration and TechGeeks team
                </div>
            </div>
        </div>
 
        <div class="schedule-item">
            <div class="time">09:30 AM - 10:00 AM</div>
            <div class="event-details">
                <div class="event-title">Sponsor Presentation</div>
                <div class="event-description">
                    Keynote from our platinum sponsor
                </div>
            </div>
            <button class="arrow-button" data-speakers="sponsor-speaker">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="12 19 12 5"></polyline> 
                    <polyline points="6 11 12 5 18 11"></polyline>
                </svg>
            </button>
        </div>

        <div class="schedule-item">
            <div class="time">10:00 AM - 12:15 PM</div>
            <div class="event-details">
                <div class="event-title">AI Conferences</div>
                <div class="event-description">
                    2 exciting conferences presented by AI experts
                </div>
            </div>
            <button class="arrow-button" data-speakers="conference-speakers-day1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="12 19 12 5"></polyline> 
                    <polyline points="6 11 12 5 18 11"></polyline>
                </svg>
            </button>
        </div>
        
        <div class="schedule-item">
            <div class="time">01:15 PM - 03:00 PM</div>
            <div class="event-details">
                <div class="event-title">AI Workshops</div>
                <div class="event-description">
                    2 different workshops on AI topics
                </div>
            </div>
            <button class="arrow-button" data-speakers="workshop-instructors-day1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="12 19 12 5"></polyline> 
                    <polyline points="6 11 12 5 18 11"></polyline>
                </svg>
            </button>    
        </div>
        
        <div class="schedule-item">
            <div class="time">03:30 PM</div>
            <div class="event-details">
                <div class="event-title">Hackathon Launch</div>
                <div class="event-description">
                    Teams of up to 5 members will compete to develop AI solutions
                </div>
            </div>  
        </div>
    `,
    day2: `
        <div class="schedule-item">
            <div class="time">09:00 AM - 10:00 AM</div>
            <div class="event-details">
                <div class="event-title">Workshop: Advanced ML Techniques</div>
                <div class="event-description">
                    Hands-on session on cutting-edge ML models
                </div>
            </div>
            <button class="arrow-button" data-speakers="workshop-instructor-day2-am">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="12 19 12 5"></polyline> 
                    <polyline points="6 11 12 5 18 11"></polyline>
                </svg>
            </button>
        </div>
        
        <div class="schedule-item">
            <div class="time">10:30 AM - 12:30 PM</div>
            <div class="event-details">
                <div class="event-title">Keynote: AI in Healthcare</div>
                <div class="event-description">
                    Transforming medical diagnostics with AI
                </div>
            </div>
            <button class="arrow-button" data-speakers="keynote-speaker-day2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="12 19 12 5"></polyline> 
                    <polyline points="6 11 12 5 18 11"></polyline>
                </svg>
            </button>
        </div>
    `,
    day3: `
        <div class="schedule-item">
            <div class="time">09:00 AM - 10:00 AM</div>
            <div class="event-details">
                <div class="event-title">Final Presentations</div>
                <div class="event-description">
                    Hackathon teams showcase their solutions
                </div>
            </div>
        </div>
        
        <div class="schedule-item">
            <div class="time">10:30 AM - 12:30 PM</div>
            <div class="event-details">
                <div class="event-title">Closing Ceremony</div>
                <div class="event-description">
                    Awards and closing remarks
                </div>
            </div>
            <button class="arrow-button" data-speakers="closing-speakers">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="12 19 12 5"></polyline> 
                    <polyline points="6 11 12 5 18 11"></polyline>
                </svg>
            </button>
        </div>
    `
};

// Base de données complète des speakers avec chemins d'images statiques
const speakersDatabase = {
    // Sponsors
    "sponsor-speaker": [
        {
            name: "Huawie",
            time: "09:30 - 09:45 AM",
            image: "images/R (13) 1.png",
        },
        {
            name: "Qareeb",
            time: " 09:45 - 10:00 AM",
            image: "images/Qareeb.png",
        },
    ],
    
    // Conférences Jour 1
    "conference-speakers-day1": [
        {
           "name": "Dr. Farouq Zitouni",
            "title": "Kolmogorov-Arnold Representation Theorem",
            "time": "10:00 - 10:45 AM",
            "affiliation": "Kasdi Merbah University - Ouargla",
            "bio": "Associate Professor in Computer Science at Kasdi Merbah University - Ouargla, Algeria. Ph.D. from Abdelhamid Mehri University of Constantine (2020). Research expertise in machine learning, deep learning, optimization, and metaheuristics. Published extensively in international conferences and peer-reviewed journals.",
            "image": "images/speaker.png"
        },
        {
            "name": "Dr.Khaled Halimi",
            "title": "Advanced Machine Learning",
            "time": "10:45 - 11:00 AM",  
            "affiliation": "University of Guelma, Algeria | LabSTIC Laboratory",
            "bio": "Computing Lecturer at the Computer Science Department of Guelma University, Algeria and researcher at the LabSTIC laboratory. Holds a Ph.D. in Computer Science from Annaba University. Specialist in neural network architectures with extensive teaching experience.",
            "image": "images/speaker.png"
        },
    ],
    
    // Workshops Jour 1
    "workshop-instructors-day1": [

        {
             name: "Dr. Ferrag Mohamed Amine",
             title: "Benchmarking Large Language Models in Cybersecurity: A Hands-On Workshop",
             time: "01:30 - 3:00 PM",
             affiliation: "Researcher in Artificial Intelligence and Cybersecurity",  
             bio: "Leading expert in AI security and large language models. Developer of CyberMetric, the open-source framework for evaluating LLMs in cybersecurity. Published researcher with multiple papers on AI applications in cryptography, network security, and threat detection. Google Scholar verified author with works cited in top security conferences and journals.",
             image: "images/speaker.png"
        },
        {
            name: "Pr. Mohammed Nadjib KOUAHLA",
            title: "????",
            time: "01:30 - 3:00 PM",  
            affiliation: "University of Guelma, Algeria | Faculty of Mathematics, Computer Science and Materials Science",
            bio: "Professor of Computer Science specializing in 3D reconstruction, image processing, and pattern recognition. Extensive research experience with publications in international journals. Active contributor to e-learning technologies. Verified research profiles on Google Scholar, ResearchGate, and Scopus.",
            image: "images/speaker.png"
        }
    ],
    
    // Jour 2
    "workshop-instructor-day2-am": [{
        name: "Dr. Elena Petrova",
        title: "Advanced Neural Architectures",
        time: "09:00 - 10:00 AM",
        affiliation: "MIT CSAIL",
        bio: "Postdoctoral researcher specializing in transformer models and their optimization. Recipient of 2023 AI Rising Star award.",
        image: "images/dr-elena-petrova.jpg"
    }],
    
    "keynote-speaker-day2": [{
        name: "Dr. James Wilson",
        title: "AI in Medical Diagnostics",
        time: "10:30 - 11:30 AM",
        affiliation: "Johns Hopkins Medicine",
        bio: "Leading researcher in medical AI applications. Developed breakthrough algorithms for early cancer detection.",
        image: "images/dr-james-wilson.jpg"
    }],
    
    // Jour 3
    "closing-speakers": [
        {
            name: "Pr. Ahmed Boudiaf",
            title: "Closing Remarks",
            time: "10:30 - 11:00 AM",
            affiliation: "University Rector",
            bio: "Academic leader with strong focus on technology education. Oversees university's AI research initiatives.",
            image: "images/pr-ahmed-boudiaf.jpg"
        },
        {
            name: "Ms. Leila Amrouche",
            title: "Awards Ceremony",
            time: "11:00 - 12:30 PM",
            affiliation: "TechGeeks Director",
            bio: "Organizer of national AI competitions with 5+ years experience in tech community building.",
            image: "images/ms-leila-amrouche.jpg"
        }
    ]
};

// Fonction pour générer le HTML des speakers avec images statiques
function generateSpeakersHTML(speakers) {
    return speakers.map((speaker, index) => `
        <div class="speaker-item ${index === 0 ? 'active' : ''}" data-speaker-id="${speaker.name.replace(/\s+/g, '-').toLowerCase()}">
            <img src="${speaker.image}" 
                 alt="${speaker.name}" 
                 class="speaker-image"
                 onerror="this.src='images/default-speaker.png'">
            <div class="speaker-info">
                <div class="speaker-name">${speaker.name}</div>
                <div class="speaker-title">${speaker.title || ''}</div>
                <div class="speaker-time">${speaker.time}</div>
                ${speaker.affiliation ? `<div class="speaker-affiliation">${speaker.affiliation}</div>` : ''}
                ${index === 0 ? `<div class="speaker-bio">${speaker.bio}</div>` : ''}
            </div>
        </div>
    `).join('');
}

function showSpeakerDetails(event) {
    event.stopPropagation();
    const speakerGroup = event.currentTarget.getAttribute('data-speakers');
    const speakers = speakersDatabase[speakerGroup];
    
    if (!speakers) return;

    const parentScheduleItem = event.currentTarget.closest('.schedule-item');
    const existingSubProgram = parentScheduleItem.nextElementSibling;
    
    if (existingSubProgram?.classList.contains('speakers-container')) {
        existingSubProgram.remove();
        return;
    }
    
    const speakersContainer = document.createElement('div');
    speakersContainer.className = 'speakers-container';
    speakersContainer.innerHTML = `
        <div class="speakers-list">
            ${generateSpeakersHTML(speakers)}
        </div>
    `;
    
    parentScheduleItem.insertAdjacentElement('afterend', speakersContainer);
    
    speakersContainer.querySelectorAll('.speaker-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            
            speakersContainer.querySelectorAll('.speaker-item').forEach(i => {
                i.classList.remove('active');
                const infoDiv = i.querySelector('.speaker-info');
                const speaker = speakers.find(s => s.name.replace(/\s+/g, '-').toLowerCase() === i.dataset.speakerId);
                if (speaker) {
                    infoDiv.innerHTML = `
                        <div class="speaker-name">${speaker.name}</div>
                        <div class="speaker-title">${speaker.title || ''}</div>
                        <div class="speaker-time">${speaker.time}</div>
                        ${speaker.affiliation ? `<div class="speaker-affiliation">${speaker.affiliation}</div>` : ''}
                    `;
                }
            });
            
            this.classList.add('active');
            const speaker = speakers.find(s => s.name.replace(/\s+/g, '-').toLowerCase() === this.dataset.speakerId);
            if (speaker) {
                const infoDiv = this.querySelector('.speaker-info');
                infoDiv.innerHTML = `
                    <div class="speaker-name">${speaker.name}</div>
                    <div class="speaker-title">${speaker.title || ''}</div>
                    <div class="speaker-time">${speaker.time}</div>
                    ${speaker.affiliation ? `<div class="speaker-affiliation">${speaker.affiliation}</div>` : ''}
                    <div class="speaker-bio">${speaker.bio}</div>
                `;
            }
        });
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.querySelector('.schedule-container');
    if (!scheduleContainer) return;
    
    // Initialize with day 1
    scheduleContainer.innerHTML = schedules.day1;
    
    // Handle day navigation buttons
    document.querySelectorAll('.btn-right-div').forEach((button, index) => {
        button.addEventListener('click', () => {
            const day = `day${index + 1}`;
            scheduleContainer.innerHTML = schedules[day];
            attachSpeakerButtons();
        });
    });
    
    // Attach event listeners to speaker buttons
    function attachSpeakerButtons() {
        document.querySelectorAll('.arrow-button').forEach(button => {
            button.removeEventListener('click', showSpeakerDetails); // Remove existing to prevent duplicates
            button.addEventListener('click', showSpeakerDetails);
        });
    }
    
    // Initial attachment
    attachSpeakerButtons();
    
    // Event delegation for hover effects
    scheduleContainer.addEventListener('mouseover', (e) => {
        const scheduleItem = e.target.closest('.schedule-item');
        if (scheduleItem) {
            scheduleItem.classList.add('hover-active');
        }
    });
    
    scheduleContainer.addEventListener('mouseout', (e) => {
        const scheduleItem = e.target.closest('.schedule-item');
        if (scheduleItem) {
            scheduleItem.classList.remove('hover-active');
        }
    });
});