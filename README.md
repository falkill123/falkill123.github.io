<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bonne fête Maman ❤️</title>

<style>
body{
    margin:0;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#ffdde1,#ee9ca7);
    font-family:Arial,sans-serif;
    overflow:hidden;
}

.container{
    text-align:center;
    background:white;
    padding:40px;
    border-radius:20px;
    box-shadow:0 0 20px rgba(0,0,0,0.2);
}

h1{
    color:#e63946;
}

button{
    padding:12px 24px;
    border:none;
    border-radius:10px;
    background:#e63946;
    color:white;
    font-size:18px;
    cursor:pointer;
}

#message{
    margin-top:20px;
    font-size:20px;
    display:none;
}

.heart{
    position:absolute;
    font-size:25px;
    animation:float 4s linear forwards;
}

@keyframes float{
    from{
        transform:translateY(0);
        opacity:1;
    }
    to{
        transform:translateY(-600px);
        opacity:0;
    }
}
</style>
</head>

<body>

<div class="container">
    <h1>Bonne fête Maman ❤️</h1>

    <p>
        Merci pour tout ce que tu fais pour moi chaque jour.
    </p>

    <button onclick="surprise()">
        Ouvrir le message secret
    </button>

    <div id="message">
        Je t'aime très fort ❤️<br>
        Merci pour ton soutien, ta patience et ton amour.
    </div>
</div>

<script>
function surprise(){

    document.getElementById("message").style.display="block";

    for(let i=0;i<40;i++){

        let heart=document.createElement("div");
        heart.innerHTML="❤️";
        heart.className="heart";

        heart.style.left=Math.random()*window.innerWidth+"px";
        heart.style.top=(window.innerHeight-50)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },4000);
    }
}
</script>

</body>
</html>
