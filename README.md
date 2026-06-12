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

let currentRotation = 0;

function spinWheel(){

    document.getElementById("result").textContent = "";

    const sliceAngle = 360 / students.length;

    const extraRotation =
        1800 + Math.random() * 1800;

    currentRotation += extraRotation;

    canvas.style.transition =
        "transform 5s cubic-bezier(0.17,0.67,0.15,1)";

    canvas.style.transform =
        `rotate(${currentRotation}deg)`;

    setTimeout(() => {

        const normalized =
            ((currentRotation % 360) + 360) % 360;

        const angleUnderPointer =
            (360 - normalized) % 360;

        const winnerIndex =
            Math.floor(angleUnderPointer / sliceAngle);

        document.getElementById("result").innerHTML =
            `🎉 Élève choisi : <b>${students[winnerIndex]}</b>`;

    }, 5000);
}

</script>


</body>

</html>

