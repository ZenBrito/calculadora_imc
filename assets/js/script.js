const btnCalcular = document.querySelector('#btn-calcular');

btnCalcular.addEventListener('click', calcular)

function calcular() {
    const p = document.querySelector('#peso');
    const a = document.querySelector('#alt');
    const f = document.querySelector('#fem');
    const m = document.querySelector('#mas');
    const resTitle = document.querySelector('#imc-res-title');
    const resPar = document.querySelector('#imc-res-par');
    const resImage = document.querySelector('#imc-res-image');
    const peso = Number(p.value);
    const alt = Number(a.value);
    const imc = peso / (alt**2);

    if (imc < 18.5 && f.checked) {
        resTitle.innerHTML = "Abaixo do Peso";
        resPar.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        resImage.src = './assets/img/imc_m_06.png';
    } else if (imc >= 18.5 && imc < 25 && f.checked) {
        resTitle.innerHTML = "Peso ideal";
        resPar.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        resImage.src = './assets/img/imc_m_05.png';
    } else if (imc >= 25 && imc < 30 && f.checked) {
        resTitle.innerHTML = "Sobrepeso";
        resPar.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        resImage.src = './assets/img/imc_m_04.png';
    } else if (imc >= 30 && imc < 35 && f.checked) {
        resTitle.innerHTML = "Obesidade Grau I";
        resPar.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        resImage.src = './assets/img/imc_m_03.png';
    } else if (imc >= 35 && imc < 40 && f.checked) {
        resTitle.innerHTML = "Obesidade Grau II";
        resPar.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        resImage.src = './assets/img/imc_m_02.png';
    } else if (imc > 40 && f.checked) {
        resTitle.innerHTML = "Obesidade Grau III";
        resPar.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        resImage.src = './assets/img/imc_m_01.png';
    } 

    if (imc < 18.5 && m.checked) {
        resTitle.innerHTML = "Abaixo do Peso";
        resPar.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        resImage.src = './assets/img/imc_06.png';
    } else if (imc >= 18.5 && imc < 25 && m.checked) {
        resTitle.innerHTML = "Peso ideal";
        resPar.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        resImage.src = './assets/img/imc_05.png';
    } else if (imc >= 25 && imc < 30 && m.checked) {
        resTitle.innerHTML = "Sobrepeso";
        resPar.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        resImage.src = './assets/img/imc_04.png';
    } else if (imc >= 30 && imc < 35 && m.checked) {
        resTitle.innerHTML = "Obesidade Grau I";
        resPar.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        resImage.src = './assets/img/imc_03.png';
    } else if (imc >= 35 && imc < 40 && m.checked) {
        resTitle.innerHTML = "Obesidade Grau II";
        resPar.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        resImage.src = './assets/img/imc_02.png';
    } else if (imc > 40 && m.checked) {
        resTitle.innerHTML = "Obesidade Grau III";
        resPar.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
        resImage.src = './assets/img/imc_01.png';
    }
}