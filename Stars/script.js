"use strict";

var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  w = (canvas.width = window.innerWidth),
  h = (canvas.height = window.innerHeight),
  hue = 217,
  stars = [],
  count = 0,
  maxStars = 1400;

var canvas2 = document.createElement("canvas"),
  ctx2 = canvas2.getContext("2d");

canvas2.width = 100;
canvas2.height = 100;

var half = canvas2.width / 2,
  gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);

gradient2.addColorStop(0.025, "#FFF");
gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
gradient2.addColorStop(1, "transparent");

ctx2.fillStyle = gradient2;
ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();

function random(min, max) {
  if (arguments.length < 2) {
    max = min;
    min = 0;
  }
  if (min > max) {
    var hold = max;
    max = min;
    min = hold;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x, y) {
  var max = Math.sqrt(x * x + y * y);
  return max / 2;
}

function randomColor() {
  var hue = random(0, 120);
  return "hsl(" + hue + ", 61%, 33%)";
}

var Star = function () {
  this.orbitRadius = random(maxOrbit(w, h));
  this.radius = random(60, this.orbitRadius) / 12;
  this.orbitX = w / 2;
  this.orbitY = h / 2;
  this.timePassed = random(0, maxStars);
  this.speed = random(this.orbitRadius) / 900000;
  this.alpha = random(2, 10) / 10;
  this.color = randomColor();

  count++;
  stars[count] = this;
};

Star.prototype.draw = function () {
  var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
    y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
    starGradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);

  starGradient.addColorStop(0.025, "#FFF");
  starGradient.addColorStop(0.1, this.color); // Use the star's unique color
  starGradient.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)"); // Outer color to blend with the background
  starGradient.addColorStop(1, "transparent"); // Ensure the outermost part is transparent

  ctx.globalAlpha = this.alpha;
  ctx.fillStyle = starGradient; // Apply the star's unique gradient
  ctx.beginPath();
  ctx.arc(x, y, this.radius, 0, Math.PI * 2);
  ctx.fill();

  this.timePassed += this.speed;
};

for (var i = 0; i < maxStars; i++) {
  new Star();
}

function animation() {
  ctx.globalCompositeOperation = "source-over";
  ctx.globalAlpha = 0.5; // Adjusted for better visibility
  ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 1)";
  ctx.fillRect(0, 0, w, h);

  ctx.globalCompositeOperation = "lighter";
  for (var i = 1; i < stars.length; i++) {
    stars[i].draw();
  }

  window.requestAnimationFrame(animation);
}

animation();
