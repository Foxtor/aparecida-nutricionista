var tabela = document.querySelector("table");

tabela.addEventListener('dblclick', function(event) {
    var classe = event.target.parentNode.classList.value;

    if(classe != "") {

        event.target.parentNode.classList.add("fadeOut");

        setTimeout(function() {
            event.target.parentNode.remove();
        }, 300);
    }

})