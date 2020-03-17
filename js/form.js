var adicionarPaciente = document.querySelector("#adicionar-paciente");

adicionarPaciente.addEventListener("click", function(event) {
    event.preventDefault();
    var paciente, tabela, form;

    //Pega as informações do formulario.
    form = document.querySelector("#adiciona-pacientes")

    paciente = novoPaciente(form);

    erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0) {      
        exibeMensagensErro(erros);
        return;  

    }

    adicionaPacienteTabela(paciente);

    form.reset();

    var mensagemErros = document.querySelector("#mensagem-erro");
    mensagemErros.innerHTML="";
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
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
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

function validaPaciente(paciente) {

    var erros = []

    if(paciente.nome.length == 0) erros.push("O campo nome não pode estar vazio");
    if(!validaPeso(paciente.peso)) erros.push("O Peso é inválido.");
    if(!validaAltura(paciente.altura)) erros.push("A altura é inválida.");
    if(paciente.gordura.length == 0) erros.push("O campo gordura não pode estar vazio");

    return erros;
}

function adicionaPacienteTabela(paciente) {
    var createTr = criaTr(paciente);
    tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(createTr);

}

function exibeMensagensErro(erros) {
    
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}