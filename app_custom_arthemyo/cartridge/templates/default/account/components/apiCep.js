function preencheFomulario(endereco){
    document.getElementById('registration-form-	stateArthemyo').value = endereco.ur;
    document.getElementById('registration-form-CityArthemyo').value = endereco.localidade;
    document.getElementById('registration-form-StreetArthemyo').value = endereco.logradouro;
}

async function pesquisaCep(){
    const cep = document.getElementById('registration-form-CEPArthemyo').value;
    const url = "https://viacep.com.br/ws/"+cep+"json";

    const dados = await fetch(url);
    const endereco = await dados.json();
    preencheFomulario(endereco);
}
document.querySelector("#registration-form-CEPArthemyo").addEventListener('blur', pesquisaCep);