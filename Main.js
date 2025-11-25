// Center viewport canvas setup
const canvas = document.getElementById("viewport-canvas");
const ctx = canvas.getContext("2d");

// Resize canvas to always fill area
function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    drawPlaceholder();
}

// Draw placeholder grid (TEMP)
function drawPlaceholder() {
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#333";

    for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
