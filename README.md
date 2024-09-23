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
    body {
    background-color: #f4f4f9;
    font-family: 'Arial', sans-serif;
    color: #333;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
}

/* Container principal do jogo */
#game {
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 10px;
    width: 90%;
    max-width: 800px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Título do jogo */
#title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #2c3e50;
}

/* Imagem da cena */
#scene-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 20px;
}

/* Texto da história */
#story {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #34495e;
}

/* Container dos botões de escolha */
#choices {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* Estilo dos botões */
button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    color: #fff;
}

/* Estilo de botões padrão */
button:nth-child(1) {
    background-color: #3498db;
}

button:nth-child(2) {
    background-color: #e67e22;
}

/* Efeito de hover nos botões */
button:hover {
    background-color: #2ecc71;
    transform: scale(1.05);
}

/* Responsividade para telas menores */
@media (max-width: 600px) {
    #game {
        width: 95%;
        padding: 15px;
    }

    #title {
        font-size: 20px;
    }

    #story {
        font-size: 16px;
    }

    button {
        font-size: 14px;
        padding: 8px 16px;
    }
}
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
