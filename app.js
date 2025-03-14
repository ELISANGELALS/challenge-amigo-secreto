let amigos = [];
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nomeAmigos = input.value;
    nomeAmigos = nomeAmigos.toUpperCase();
if (nomeAmigos=='') {
alert('Digite o nome do amigo secreto');
return;
} 
if (amigos.includes(nomeAmigos)) {
    alert('Esse amigo já foi adicionado!');
    input.value = ''; 
    return;
}
amigos.push(nomeAmigos);
input.value = '';
atualizarLista();
}   
function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
     lista.appendChild(item);
  }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indiceSorteado];
    let resultado = document.getElementById("resultado");
    amigos.splice(indiceSorteado, 1);
    resultado.innerHTML = `O amigo secreto sorteado é: ${sorteado}`;

    //let limparLista = document.getElementById('listaAmigos');
    //limparLista.innerHTML = '';
  
}

    

             
    