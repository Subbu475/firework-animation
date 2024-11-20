const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function firework(x, y) {
  const particles = Array.from({ length: 50 }).map(() => ({
    x,
    y,
    angle: Math.random() * 2 * Math.PI,
    speed: Math.random() * 4 + 1,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  setInterval(draw, 30);
}

document.getElementById('fireworks-btn').addEventListener('click', () => {
  firework(canvas.width / 2, canvas.height / 2);
});
