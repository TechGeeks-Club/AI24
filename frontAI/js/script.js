
function createSquares(numSquares) {
    const container = document.body;
    
    for(let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        
        // Taille aléatoire entre 20px et 80px
        const size = 20 + Math.random() * 40;
        const width = size * (0.8 + Math.random() * 0.4);
        const height = size * (0.8 + Math.random() * 0.4);
        
        // Position aléatoire
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        // Application des styles
        square.style.width = `${width}px`;
        square.style.height = `${height}px`;
        square.style.left = `${x}px`;
        square.style.top = `${y}px`;
        
        // Délai d'animation aléatoire
        square.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(square);
    }
}

// Créer 30 carrés (ajuster selon besoin)
createSquares(30);

// Redimensionnement responsive
window.addEventListener('resize', () => {
    document.querySelectorAll('.square').forEach(sq => sq.remove());
    createSquares(30);
});





