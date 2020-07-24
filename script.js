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
		let img = (ctx.fillStyle = 'blue');
		ctx.fill();
	}

	update() {
		this.x += this.speedX;
		this.y += this.speedY;
		if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
			this.speexX = -this.speedX;
		}
		if (this.y + this.radius > canvas.height || this.y + this.radius < 0) {
			this.speedY = -this.speedY;
		}
		this.draw();
	}
}

function init() {
	for (let i = 0; i < numberOfParticles; i++) {
		particlesArray.push(new Particle());
	}
}

function animate() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'rgba(255,255,255,0.05)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < particlesArray.length; i++) {
		particlesArray[i].update();
	}
	requestAnimationFrame(animate);
}

init();
animate();
