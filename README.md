<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O Tesouro Perdido</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="game">
        <h1 id="title">O Tesouro Perdido</h1>
        <img id="scene-image" src="https://i.pinimg.com/originals/8e/39/54/8e395469b288061b0a26b759e1109bd9.png" alt="Ilha misteriosa">
        <p id="story">Você é Sam, um jovem explorador em busca de um tesouro perdido escondido em uma ilha misteriosa. Após dias navegando, você finalmente chega à ilha e se depara com duas trilhas que levam a diferentes partes da floresta.</p>
        <div id="choices">
            <button onclick="choose('A')">Seguir a trilha da esquerda, que parece mais aberta e iluminada.</button>
            <button onclick="choose('B')">Seguir a trilha da direita, que é escura e coberta por árvores espessas.</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
