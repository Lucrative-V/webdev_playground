const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Bar {
    constructor(x, y, width, height, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y -= this.speedY;
    }

    draw() {
        ctx.fillStyle = "cyan";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "cyan";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let bars = [];
function createBars() {
    if (Math.random() < 0.02) { 
        let direction = Math.random() < 0.5 ? "vertical" : "horizontal";
        let width = Math.random() * 4 + .75;
        let height = Math.random() * 300 + 100; // Reduced min size, kept max size
        let speed = Math.random() * 1.5 + 1;
        if (direction === "vertical") {
            let x = Math.random() * canvas.width;
            bars.push(new Bar(x, canvas.height + height, width, height, 0, speed));
        } else {
            let y = Math.random() * canvas.height;
            bars.push(new Bar(-height, y, height, width, speed, 0));
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createBars();
    bars.forEach((bar, index) => {
        bar.update();
        bar.draw();
        if (bar.y + bar.height < -bar.height || bar.x > canvas.width + bar.width) { 
            bars.splice(index, 1);
        }
    });
    requestAnimationFrame(animate);
}

animate();
