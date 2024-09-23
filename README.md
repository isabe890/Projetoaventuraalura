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


// Estados do jogo conforme a história "O Tesouro Perdido"
let gameState = {
    A: {
        title: "Você escolheu a trilha da esquerda",
        story: "Você segue pela trilha iluminada e rapidamente chega a um riacho cristalino. No meio do riacho, há uma ponte de madeira.",
        image: "https://agendor-blog-uploads.s3.sa-east-1.amazonaws.com/2022/09/12094319/trilha-de-aprendizagem-organizacional.jpg",
        choices: {
            C: "Atravesse a ponte.",
            D: "Contorne o riacho."
        },
        nextState: {
            C: "Final1",
            D: "Final2"
        }
    },
    B: {
        title: "Você escolheu a trilha da direita",
        story: "Você segue pela trilha escura e percebe pegadas misteriosas no chão. Elas parecem levar até uma caverna.",
        image: "https://media.istockphoto.com/id/153752095/pt/foto/selva-profunda.jpg?s=612x612&w=0&k=20&c=mQ4rxWzjNnzJWrDXMj93LJyz47ydOvyNJrhc3kl-gnI=",
        choices: {
            E: "Seguir as pegadas para dentro da caverna.",
            F: "Ignorar as pegadas e seguir em frente."
        },
        nextState: {
            E: "Final3",
            F: "Final4"
        }
    },
    Final1: {
        title: "Você atravessou a ponte",
        story: "Ao atravessar a ponte, ela começa a balançar, mas você consegue chegar ao outro lado. Lá, você encontra o baú do tesouro! Você abre o baú e encontra ouro e joias. Sua aventura foi um sucesso!",
        image: "https://media.npr.org/assets/img/2020/06/08/fenn002_custom-28fd8c06a224983d8ad75ea6d7338dab99cc77b2.jpg",
        choices: {}
    },
    Final2: {
        title: "Você contornou o riacho",
        story: "Contornando o riacho, você pisa em um terreno instável e cai em uma armadilha. Preso, você percebe que a ilha guarda mais perigos do que imaginava. Sua aventura termina aqui.",
        image: "https://www.thedailygardener.com/wp-content/uploads/2021/12/Pit-Trap.jpeg",
        choices: {}
    },
    Final3: {
        title: "Você entrou na caverna",
        story: "Ao seguir as pegadas, você entra na caverna e encontra um mapa que indica o local exato do tesouro. Com o mapa em mãos, você segue para o local indicado e encontra o tesouro perdido. Você é recompensado pela sua coragem e perspicácia.",
        image: "https://t3.ftcdn.net/jpg/01/21/80/16/360_F_121801600_CMAfgueYYBiq0w88E1r5Lkklp7Hl1AO4.jpg",
        choices: {}
    },
    Final4: {
        title: "Você ignorou as pegadas",
        story: "Ignorando as pegadas, você se perde na floresta e acaba dando a volta na ilha, sem nunca encontrar o tesouro. Você sai da floresta sem nada, mas com a experiência de uma grande aventura.",
        image: "https://parade.com/.image/t_share/MTkwNTc4Mzg4MDIzNzE0OTQx/lost-wilderness-ftr.jpg",
        choices: {}
    }
};

// Função para avançar no jogo com base na escolha do jogador
function choose(choice) {
    const state = gameState[choice];
    document.getElementById('title').innerText = state.title;
    document.getElementById('story').innerText = state.story;
    document.getElementById('scene-image').src = state.image;
    document.getElementById('scene-image').alt = state.title;

    // Limpa as escolhas anteriores
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';

    // Adiciona novos botões de escolha, se existirem
    for (const [key, text] of Object.entries(state.choices)) {
        const button = document.createElement('button');
        button.innerText = text;
        button.onclick = () => choose(state.nextState[key]);
        choicesDiv.appendChild(button);
    }
}

