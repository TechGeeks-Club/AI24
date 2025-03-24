function createSquares(numSquares) {
    const container = document.body;
    const isSmallScreen = window.innerWidth <= 600;
    
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        
        // Random size based on screen size
        const maxSize = isSmallScreen ? 40 : 80;
        const minSize = isSmallScreen ? 10 : 20;
        const size = minSize + Math.random() * (maxSize - minSize);
        
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        
        // Ensure squares stay within the viewport
        const x = Math.random() * (window.innerWidth - size);
        const y = Math.random() * (window.innerHeight - size);
        
        square.style.left = `${x}px`;
        square.style.top = `${y}px`;
        
        // Random animation delay
        square.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(square);
    }
}

// Initial squares
createSquares(10);

// Handle window resizing
window.addEventListener('resize', () => {
    document.querySelectorAll('.square').forEach(sq => sq.remove());
    createSquares(10); // Adjust number of squares as needed
});