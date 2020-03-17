var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    console.log(this.value);


    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        pacientes.forEach(paciente => {
            console.log("------------")
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
    
            if(!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
    
            console.log(nome);
        });

    } else {
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel");
        })
    }


})