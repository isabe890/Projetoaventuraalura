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
