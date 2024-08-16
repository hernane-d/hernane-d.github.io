function armazenarValor() {

    // Armazena o valor que o usuário digitou
    var userInput = document.getElementById("userInput").value;


    // Exibe o valor armazenado
    console.log("O valor da variável é: " + userInput)


    // Atualiza o valor
    document.getElementById("valorInserido").innerText = "O Valor Inserido é = " + userInput;
}
