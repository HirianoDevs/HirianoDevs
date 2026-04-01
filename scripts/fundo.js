const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

let width, height, particles;
const particleGap = 30; // Distância entre as partículas

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    particles = [];

    // Criar grelha de partículas
    for (let y = 0; y < height; y += particleGap) {
        for (let x = 0; x < width; x += particleGap) {
            particles.push({ x, y, baseSize: 1.5 });
        }
    }
}

function animate(time) {
    ctx.clearRect(0, 0, width, height);
    
    // Cor das partículas (Azul HirianoDevs com opacidade)
    ctx.fillStyle = 'rgba(0, 102, 255, 0.3)';

    particles.forEach(p => {
        // Lógica de onda (Montanha)
        // Usamos Math.sin para criar o movimento ondulado baseado no tempo e posição
        const noise = Math.sin(p.x * 0.005 + time * 0.002) * Math.cos(p.y * 0.005 + time * 0.001) * 40;
        
        const finalX = p.x;
        const finalY = p.y + noise;

        ctx.beginPath();
        ctx.arc(finalX, finalY, p.baseSize, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
requestAnimationFrame(animate);
