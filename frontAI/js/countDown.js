 // Définir la date de fin du compte à rebours
 const countDownDate = new Date("Apr 14, 2025 23:59:59").getTime();

 // Function to update the countdown
 function updateCountdown() {
   // Obtenir la date et l'heure actuelles
   const now = new Date().getTime();

   // Calculer la différence entre la date de fin et la date actuelle
   const distance = countDownDate - now;

   // Calculer les jours, heures, minutes et secondes
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Update the CSS variable for animation
   document.getElementById("days").style.setProperty('--qwvalue', days);
   document.getElementById("hours").style.setProperty('--qwvalue', hours);
   document.getElementById("minutes").style.setProperty('--qwvalue', minutes);
   document.getElementById("seconds").style.setProperty('--qwvalue', seconds);
   
   // Also update the aria-label for accessibility
   document.getElementById("days").setAttribute('aria-label', days);
   document.getElementById("hours").setAttribute('aria-label', hours);
   document.getElementById("minutes").setAttribute('aria-label', minutes);
   document.getElementById("seconds").setAttribute('aria-label', seconds);

   // Si le compte à rebours est terminé, afficher un message
   if (distance < 0) {
     clearInterval(x);
     document.querySelectorAll(".numbers > div").forEach(el => {
       el.innerHTML = "<span style='font-size: 2rem;'>EXPIRED</span>";
     });
   }
 }

 // Initial update
 updateCountdown();

 // Mettre à jour le compte à rebours toutes les 1 seconde
 const x = setInterval(updateCountdown, 1000);