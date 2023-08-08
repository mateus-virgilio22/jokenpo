let pedra = document.getElementById('pedra');
let papel = document.getElementById('papel');
let tesoura = document.getElementById('tesoura')

pedra.addEventListener('click', pedra);
papel.addEventListener('click', papel);
tesoura.addEventListener('click', tesoura);

function rock() {
    let res = document.querySelector('.aviso');
    let maquina = Math.floor(Math.random() * 10) + 1;
    let optionMqn = '';
    if(maquina <= 3) {
        optionMqn = 'pedra';
        alert (`A máquina escolheu ${optionMqn}`)
        res.innerHTML = 'Empate!'
    } else if(maquina <=6) {
        optionMqn = 'papel';
        alert (`A máquina escolheu ${optionMqn}`);
        res.innerHTML = 'Você perdeu!'
    } else {
        optionMqn = 'tesoura';
        alert (`A máquina escolheu ${optionMqn}`);
        res.innerHTML = 'Você ganhou!'
    }
}

function paper() {
    let res = document.querySelector('.aviso');
    let mqn = Math.floor(Math.random() * 10) + 1;
    let optionMqn = '';
    if(mqn <= 3) {
        optionMqn = 'pedra';
        alert (`A máquina escolheu ${optionMqn}`);
        res.innerHTML = 'Você ganhou!'
    } else if(mqn <= 6) {
        optionMqn = 'papel';
        alert (`A máquina escolheu ${optionMqn}`);
        res.innerHTML = 'Empate!'
    } else {
        optionMqn = 'tesoura';
        alert (`A máquina escolheu ${optionMqn}`);
        res.innerHTML = 'Você perdeu!'
    }
}

function scissors() {
    let res = document.querySelector('.aviso');
    let mqn3 = Math.floor(Math.random() * 10) + 1;
    let optionMqn = '';
    if(mqn3 <= 3) {
        optionMqn = 'pedra';
        alert (`A máquina escolheu ${optionMqn}`);
        res.innerHTML = 'Você perdeu!'
    } else if(mqn3 <=6) {
        optionMqn = 'papel';
        alert (`A máquina escolheu ${optionMqn}`);
        res.innerHTML = 'Você ganhou!'
    } else {
        optionMqn = 'tesoura';
        alert (`A máquina escolheu ${optionMqn}`);
        res.innerHTML = 'Empate!'
    }
}
