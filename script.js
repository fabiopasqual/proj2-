document.addEventListener('DOMContentLoaded', () => {
    const scenes = {
        inicio: {
            image: 'images/nave-espacial.jpg',
            text: 'Você está no comando de uma missão espacial. Suas escolhas definirão o destino da missão.',
            choices: [
                { text: 'Iniciar Exploração', nextScene: 'exploracao' }
            ]
        },
        exploracao: {
            image: 'images/warp-speed.jpg',
            text: 'Você está prestes a explorar o espaço. O que deseja fazer?',
            choices: [
                { text: 'Explorar a estação espacial', nextScene: 'explorar_estacao' },
                { text: 'Pousar em um planeta desconhecido', nextScene: 'pousar_planeta' }
            ]
        },
        explorar_estacao: {
            image: 'images/estacao-abandonada.jpg',
            text: 'Você está explorando uma estação espacial abandonada. O que deseja fazer?',
            choices: [
                { text: 'Investigar a sala de controle', nextScene: 'sala_controle' },
                { text: 'Explorar o laboratório', nextScene: 'laboratorio' }
            ]
        },
        pousar_planeta: {
            image: 'images/planeta.jpg',
            text: 'Você pousou em um planeta desconhecido. O que deseja fazer?',
            choices: [
                { text: 'Explorar o planeta', nextScene: 'explorar_planeta' },
                { text: 'Voltar para a nave', nextScene: 'voltar_nave' }
            ]
        },
        sala_controle: {
            image: 'images/sala-controle.jpg',
            text: 'Você encontrou a sala de controle. Parece que não há nada de útil aqui.',
            choices: [
                { text: 'Explorar mais', nextScene: 'exploracao' },
                { text: 'Voltar ao início', nextScene: 'inicio' }
            ]
        },
        laboratorio: {
            image: 'images/laboratorio.jpg',
            text: 'Você encontrou um laboratório. Parece que há alguns itens interessantes aqui!',
            choices: [
                { text: 'Investigar os itens', nextScene: 'final' },
                { text: 'Voltar ao início', nextScene: 'inicio' }
            ]
        },
        explorar_planeta: {
            image: 'images/vida-alienigena.jpg',
            text: 'Durante sua exploração, você encontra sinais de vida alienígena.',
            choices: [
                { text: 'Investigar sinais de vida', nextScene: 'vida_alienigena' },
                { text: 'Voltar para a nave', nextScene: 'voltar_nave' }
            ]
        },
        vida_alienigena: {
            image: 'images/contato-alienigena.jpg',
            text: 'Você entrou em contato com vida alienígena. Eles são amigáveis e oferecem ajuda.',
            choices: [
                { text: 'Aceitar ajuda', nextScene: 'final' },
                { text: 'Recusar ajuda e voltar ao início', nextScene: 'inicio' }
            ]
        },
        voltar_nave: {
            image: 'images/nave-espacial.jpg',
            text: 'Você voltou para a nave e decidiu explorar outra área.',
            choices: [
                { text: 'Explorar a estação espacial', nextScene: 'explorar_estacao' },
                { text: 'Pousar em um planeta desconhecido', nextScene: 'pousar_planeta' }
            ]
        },
        final: {
            image: 'images/exploracao-espacial.jpg',
            text: 'Você teve uma ótima exploração e coletou muitas informações valiosas. Sua missão foi um sucesso!',
            choices: [
                { text: 'Voltar ao início', nextScene: 'inicio' }
            ]
        }
    };

    const sceneImage = document.getElementById('scene-image');
    const sceneText = document.getElementById('scene-text');
    const choicesContainer = document.getElementById('choices-container');
    const restartButton = document.getElementById('restart-button');

    function renderScene(sceneKey) {
        const scene = scenes[sceneKey];

        if (scene) {
            sceneImage.src = scene.image;
            sceneText.textContent = scene.text;
            choicesContainer.innerHTML = '';

            scene.choices.forEach(choice => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                button.className = 'choice-button';
                button.onclick = () => renderScene(choice.nextScene);
                choicesContainer.appendChild(button);
            });

            restartButton.style.display = sceneKey === 'final' ? 'block' : 'none';
        }
    }

    document.querySelector('button').onclick = () => {
        document.querySelector('.overlay').style.display = 'none';
        renderScene('exploracao');
    };

    restartButton.onclick = () => {
        document.querySelector('.overlay').style.display = 'flex';
        renderScene('inicio');
    };

    renderScene('inicio');
});
