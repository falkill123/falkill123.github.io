const students = [
    "Alice",
    "Lucas",
    "Emma",
    "Nathan",
    "Léa",
    "Tom",
    "Sarah",
    "Louis",
    "Inès",
    "Hugo"
];

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");

const colors = [
    "#ff6384",
    "#36a2eb",
    "#ffce56",
    "#4bc0c0",
    "#9966ff",
    "#ff9f40",
    "#8bc34a",
    "#e91e63",
    "#2196f3",
    "#ffc107"
];

const radius = canvas.width / 2;
const arc = (2 * Math.PI) / students.length;

let currentRotation = 0;

function drawWheel() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    students.forEach((student, i) => {

        const angle = i * arc;

        ctx.beginPath();
        ctx.moveTo(radius, radius);

        ctx.arc(
            radius,
            radius,
            radius,
            angle,
            angle + arc
        );

        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();

        ctx.save();

        ctx.translate(radius, radius);
        ctx.rotate(angle + arc / 2);

        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.textAlign = "right";

        ctx.fillText(student, radius - 20, 10);

        ctx.restore();
    });
}

drawWheel();

spinBtn.addEventListener("click", () => {

    spinBtn.disabled = true;
    result.textContent = "";

    const selectedIndex =
        Math.floor(Math.random() * students.length);

    const degreesPerSlice =
        360 / students.length;

    const targetAngle =
        360 -
        (selectedIndex * degreesPerSlice) -
        degreesPerSlice / 2;

    const extraSpins =
        360 * (5 + Math.random() * 3);

    const finalRotation =
        currentRotation +
        extraSpins +
        targetAngle;

    canvas.style.transform =
        `rotate(${finalRotation}deg)`;

    currentRotation = finalRotation;

    setTimeout(() => {

        result.textContent =
            `🎉 Élève choisi : ${students[selectedIndex]}`;

        spinBtn.disabled = false;

    }, 5000);
});
