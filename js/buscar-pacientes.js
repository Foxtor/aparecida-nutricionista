var botaoBusca = document.querySelector("#buscar-pacientes");

botaoBusca.addEventListener("click", () => {
    console.log("oi");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener('load', () => {

        var erro = document.querySelector("#erro-ajax");
        if(xhr.status == 200) {
            erro.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(paciente => {
                adicionaPacienteTabela(paciente);
            });
        }else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erro.classList.remove("invisivel");
        }
    })

    xhr.send();
})