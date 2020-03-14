var adicionarPaciente = document.querySelector("#adicionar-paciente");

adicionarPaciente.addEventListener("click", function(event) {
    event.preventDefault();
    var paciente, tabela, form;

    //Pega as informações do formulario.
    form = document.querySelector("#adiciona-pacientes")
    tabela = document.querySelector("#tabela-pacientes")

    paciente = novoPaciente(form);
    
    var createTr = criaTr(paciente);

    tabela.appendChild(createTr);

    form.reset();
});

function novoPaciente (form) {
    var paciente = {};

    paciente.nome = form.nome.value;
    paciente.peso = form.peso.value;
    paciente.altura = form.altura.value;
    paciente.gordura = form.gordura.value;
    paciente.imc = calculaImc(paciente.peso, paciente.altura);

    return paciente;
}

function criaTr (paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function criaTd(dado, classe) {
    var newTd = document.createElement('td');
    newTd.textContent = dado;
    newTd.classList.add(classe);

    return newTd;
}