'use strict';

let sliderInput = document.querySelector("#tamanho");
let btn = document.querySelector("#btn");

let tamInput = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector(".container-password");

let charset = "abcdefghijklmnopqrstuvwxyzçABCDEFGHIJKLMNOPQRSTUVWXYZÇ0123456789.?;-+/";
let newSenha = "";

tamInput.innerHTML =  sliderInput.value;

sliderInput.oninput = function(e)
{
    tamInput.innerHTML = this.value;
};

btn.addEventListener("click", gerarSenha);

function gerarSenha(e)
{
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderInput.value; ++i)
    {
        pass += charset.charAt(Math.floor(Math.random() * n));
        
    }
    containerPassword.classList.remove("caixa");
    password.innerHTML = pass;
    newSenha = pass;
};

password.addEventListener("click", copyPass);

function copyPass(e)
{
    navigator.clipboard.writeText(newSenha)
    .then(()=>
    {
        alert("Senha copiada com sucesso");
    })
    .catch(() => 
    {
        alert("Erro ao copiar")
    });
};