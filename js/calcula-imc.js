var pacientes = document.querySelectorAll('.paciente');

for (i = 0; i < pacientes.length; i++) {
    var pesoCerto = true // verificador para ver se o peso está certo
    var alturaCerta = true // verificador para ver se a altura está certa
    var paciente = pacientes[i]; // pega cada linha de pacientes da tabela
    
    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;
    
    if (peso < 0 || peso > 300) {
        pesoCerto = false;
    } else if (altura < 0 || altura > 2.10) {
        alturaCerta = false;
    }

    
    if (pesoCerto === false) {
        paciente.querySelector(".info-imc").textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");

    } else if (alturaCerta === false) {
        paciente.querySelector(".info-imc").textContent = "Altura inválida";
    } else {
        paciente.querySelector(".info-imc").textContent = calculaImc(peso,altura);
    }
}


function calculaImc(peso,altura) {
    var imc = 0;

    if (peso < 0 || peso > 300) {
        pesoCerto = false;
    } else if (altura < 0 || altura > 2.10) {
        alturaCerta = false;
    }
    
    imc = (peso / (altura * altura)).toFixed(2);

    return imc;
}
