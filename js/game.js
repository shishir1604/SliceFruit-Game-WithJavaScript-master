const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let score = 0;
let lives = 3;
let isGameOver = false;
const gameObjects = [];
const spawnRate = 1000; // milliseconds

class GameObject {
    constructor(x, y, radius, type) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.type = type;
        this.velocityX = Math.random() * 4 - 2;
        this.velocityY = Math.random() * 4 - 10;
        this.gravity = 0.1;
    }

    update() {
        this.velocityY += this.gravity;
        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    draw() {
        ctx.fillStyle = this.type === 'fruit' ? 'green' : 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

function spawnGameObject() {
    if (isGameOver) return;
    const x = Math.random() * canvas.width;
    const y = canvas.height;
    const radius = 30;
    const type = Math.random() > 0.9 ? 'bomb' : 'fruit';
    gameObjects.push(new GameObject(x, y, radius, type));
}

canvas.addEventListener('mousemove', function(event) {
    if (isGameOver) return;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    for (let i = 0; i < gameObjects.length; i++) {
        const obj = gameObjects[i];
        const distance = Math.sqrt((mouseX - obj.x) ** 2 + (mouseY - obj.y) ** 2);
        if (distance < obj.radius) {
            if (obj.type === 'fruit') {
                score++;
            } else if (obj.type === 'bomb') {
                gameOver();
            }
            gameObjects.splice(i, 1);
            break;
        }
    }
});

function gameLoop() {
    if (isGameOver) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < gameObjects.length; i++) {
        const obj = gameObjects[i];
        obj.update();
        obj.draw();

        if (obj.y > canvas.height) {
            if (obj.type === 'fruit') {
                lives--;
                if (lives === 0) {
                    gameOver();
                }
            }
            gameObjects.splice(i, 1);
            i--;
        }
    }

    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('lives').textContent = `Lives: ${lives}`;

    requestAnimationFrame(gameLoop);
}

function gameOver() {
    isGameOver = true;
    document.getElementById('gameOver').style.display = 'block';
}

// Start the game
setInterval(spawnGameObject, spawnRate);
requestAnimationFrame(gameLoop);
