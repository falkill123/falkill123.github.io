<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Roue des Élèves</title>

<style>
body{
    font-family:Arial,sans-serif;
    text-align:center;
    background:#f4f4f4;
}

h1{
    margin-top:20px;
}

.wheel-container{
    position:relative;
    width:500px;
    margin:20px auto;
}

.arrow{
    position:absolute;
    top:-15px;
    left:50%;
    transform:translateX(-50%);
    width:0;
    height:0;
    z-index:10;

    border-left:20px solid transparent;
    border-right:20px solid transparent;
    border-top:40px solid red;
}

canvas{
    border-radius:50%;
    border:5px solid #333;
}

button{
    padding:12px 25px;
    font-size:18px;
    cursor:pointer;
    margin-top:20px;
}

#result{
    margin-top:20px;
    font-size:28px;
    font-weight:bold;
}
</style>

</head>
<body>

<h1>🎓 Roue des Élèves</h1>

<div class="wheel-container">
    <div class="arrow"></div>
    <canvas id="wheel" width="500" height="500"></canvas>
</div>

<button onclick="spinWheel()">Choisir un élève</button>

<div id="result"></div>

<script>

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

const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#8BC34A",
    "#E91E63",
    "#00BCD4",
    "#FFC107"
];

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const center = 250;
const radius = 250;

function drawWheel(){

    const slice = (2 * Math.PI) / students.length;

    for(let i=0;i<students.length;i++){

        const start = i * slice;
        const end = start + slice;

        ctx.beginPath();
        ctx.moveTo(center,center);
        ctx.arc(center,center,radius,start,end);
        ctx.closePath();

        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();

        ctx.save();

        ctx.translate(center,center);
        ctx.rotate(start + slice/2);

        ctx.fillStyle = "white";
        ctx.font = "18px Arial";
        ctx.textAlign = "right";

        ctx.fillText(
            students[i],
            radius - 20,
            5
        );

        ctx.restore();
    }
}

drawWheel();

let currentRotation = 0;

function spinWheel(){

    document.getElementById("result").textContent = "";

    const winner =
        Math.floor(Math.random() * students.length);

    const sliceAngle =
        360 / students.length;

    /*
      Centre du secteur gagnant
      sous la flèche située en haut
    */
    const targetRotation =
        360 -
        (winner * sliceAngle + sliceAngle / 2);

    const extraSpins =
        1800 + Math.random() * 1080;

    currentRotation =
        currentRotation +
        extraSpins +
        targetRotation;

    canvas.style.transition =
        "transform 5s cubic-bezier(0.17,0.67,0.15,1)";

    canvas.style.transform =
        `rotate(${currentRotation}deg)`;

    setTimeout(() => {

        document.getElementById("result").innerHTML =
            `🎉 Élève choisi : <br><b>${students[winner]}</b>`;

    }, 5000);
}

</script>

</body>
</html>

