<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">

<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300&display=swap" rel="stylesheet">

<style>

body{
    margin:0;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#F9DDE2;
    overflow:hidden;
    font-family:'Poppins', sans-serif;
}

.container{
    text-align:center;
    position:relative;
    z-index:2;
}

h1{
    font-family:'Great Vibes', cursive;
    font-size:6rem;
    color:#C86B85;
    margin-bottom:10px;
    font-weight:normal;
}

.signature{
    font-size:1.2rem;
    color:#8A6A74;
    letter-spacing:1px;
}

.flower{
    position:absolute;
    width:150px;
}

.top-left{
    top:5%;
    left:5%;
}

.top-right{
    top:5%;
    right:5%;
}

.bottom-left{
    bottom:5%;
    left:5%;
}

.bottom-right{
    bottom:5%;
    right:5%;
}

</style>
</head>

<body>

<!-- Remplace les src par tes gifs -->
<img src="fleur1.gif" class="flower top-left">
<img src="fleur2.gif" class="flower top-right">
<img src="fleur3.gif" class="flower bottom-left">
<img src="fleur4.gif" class="flower bottom-right">

<div class="container">
    <h1>Bonne fête Maman</h1>
    <div class="signature">
        De la part de on fils adoré ❤️
    </div>
</div>

</body>
</html>
