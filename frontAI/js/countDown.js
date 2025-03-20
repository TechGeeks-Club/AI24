// Définir la date de fin du compte à rebours
const countDownDate = new Date("Apr 14, 2025 23:59:59").getTime();

// Mettre à jour le compte à rebours toutes les 1 seconde
const x = setInterval(function() {

    // Obtenir la date et l'heure actuelles
    const now = new Date().getTime();

    // Calculer la différence entre la date de fin et la date actuelle
    const distance = countDownDate - now;

    // Calculer les jours, heures, minutes et secondes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Afficher le résultat dans les éléments HTML correspondants
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si le compte à rebours est terminé, afficher un message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);