const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let score = 0;
let lives = 3;
let isGameOver = false;
const gameObjects = [];
let spawnRate = 1000;
let gameInterval;

const startScreen = document.getElementById("startScreen");
const endScreen = document.getElementById("endScreen");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");

const fruitImages = [
  "images/apple1-removebg-preview.png",
  "images/banana1.png",
  "images/orange1-removebg-preview.png",
  "images/cherries1.png",
  "images/watermelon1.png",
].map((src) => {
  const img = new Image();
  img.src = src;
  return img;
});

const bombImage = new Image();
bombImage.src = "images/bomb1-removebg-preview.png";

class GameObject {
  constructor(x, y, radius, type) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.type = type;
    this.velocityX = Math.random() * 4 - 2;
    this.velocityY = Math.random() * 4 - 10;
    this.gravity = 0.1;
    if (type === "fruit") {
      this.image = fruitImages[Math.floor(Math.random() * fruitImages.length)];
    } else {
      this.image = bombImage;
    }
  }

  update() {
    this.velocityY += this.gravity;
    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.x - this.radius,
      this.y - this.radius,
      this.radius * 2.5,
      this.radius * 2.5,
    );
  }
}

function gameObject() {
  if (isGameOver) {
    return;
  }
  const radius = 60;
  const x = Math.random() * (canvas.width - 2 * radius) + radius;
  const y = canvas.height;
  const type = Math.random() > 0.9 ? "bomb" : "fruit";
  gameObjects.push(new GameObject(x, y, radius, type));
}

canvas.addEventListener("mousemove", function (event) {
  if (isGameOver) return;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  for (let i = 0; i < gameObjects.length; i++) {
    const obj = gameObjects[i];
    const distance = Math.sqrt((mouseX - obj.x) ** 2 + (mouseY - obj.y) ** 2);
    if (distance < obj.radius) {
      if (obj.type === "fruit") {
        score++;
      } else if (obj.type === "bomb") {
        endGame();
      }
      gameObjects.splice(i, 1);
      break;
    }
  }
});

function gameProcess() {
  if (isGameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < gameObjects.length; i++) {
    const obj = gameObjects[i];
    obj.update();
    obj.draw();

    if (obj.y > canvas.height) {
      if (obj.type === "fruit") {
        lives--;
        if (lives === 0) {
          endGame();
        }
      }
      gameObjects.splice(i, 1);
      i--;
    }
  }

  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("lives").textContent = `Lives: ${lives}`;

  requestAnimationFrame(gameProcess);
}

function endGame() {
  isGameOver = true;
  document.getElementById("finalScore").textContent = `Final Score: ${score}`;
  endScreen.style.display = "block";
  clearInterval(gameInterval);
}

function startGame() {
  isGameOver = false;
  score = 0;
  lives = 3;
  gameObjects.length = 0;
  startScreen.style.display = "none";
  endScreen.style.display = "none";
  canvas.style.display = "block";
  clearInterval(gameInterval);
  gameInterval = setInterval(gameObject, spawnRate);
  requestAnimationFrame(gameProcess);
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);

startScreen.style.display = "block";
canvas.style.display = "none";
module.exports = GameObject;
module.exports = canvas;
module.exports = ctx;
module.exports = resizeCanvas;
module.exports = startScreen;
module.exports = endScreen;
module.exports = startButton;
module.exports = restartButton;
module.exports = fruitImages;
module.exports = bombImage;
module.exports = startGame;
module.exports = endGame;
module.exports = gameProcess;
module.exports = gameObject;
