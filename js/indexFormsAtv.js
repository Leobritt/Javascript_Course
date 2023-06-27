function scope() {
    //selecionado o form pode ser pelo nome da tag, class . ou id #
    const form = document.querySelector('.form');
    const results = document.querySelector('.results');

    //array
    const people = [];

    //outra forma de fazer
    function reciveEventForm(event){
        event.preventDefault(); //previne o comportamento padrão nesse caso enviar 
        const name = form.querySelector(".first-name");
        const lastName = form.querySelector(".last-name");
        const weight = form.querySelector(".weight");
        const height = form.querySelector(".height");

        people.push({
            name: name.value,
            lastName: lastName.value,
            weight: weight.value,
            height: height.value
        });

        console.log(people);

        results.innerHTML+= `<p>${name.value} ${lastName.value} ${weight.value} ${height.value}</p>`;
        

    }
    //pegar evento do form e receber uma funcao anonima que pega quando o butao foi clicado
    form.addEventListener("submit",reciveEventForm);
}

scope();
