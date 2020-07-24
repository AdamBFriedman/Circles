const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let numberOfParticles = 200;
const particlesArray = [];
let hue = 0;

class Particle {
	constructor() {
		this.x = Math.random() * canvas.width;
		this.y = Math.random() * canvas.height;
		this.radius = Math.random() * 10 + 2;
		this.speedX = Math.random() * 3 - 1.5;
		this.speedY = Math.random() * 3 - 1.5;
	}

	draw() {
		ctx.beginPath();
		// Create circle effect
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fillStyle = 'blue';
		ctx.fill();
	}
}
