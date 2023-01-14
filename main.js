const form = document.getElementById("form");
const numeroA = document.getElementById("campoA");
const numeroB = document.getElementById("campoB")
let formEValido = false;

function valido(a,b) {
    let campoA = a.split("").length; 
    let campoB = b.split("").length;
    if(campoA>campoB){
        return false;
    }else{
        if(campoA == campoB){
            return b > a;
        }else{
           return true;
        }
    } }

    form.addEventListener("submit", function(e){
        e.preventDefault();
        let formEValido = false;

        formEValido = valido(campoA.value, campoB.value);
        if(formEValido){
            alert("Parabéns! Suas informações foram enviadas com sucesso!");
            campoA.value = '';
            campoB.value = '';
        }else{
            campoA.classList.add('error');
            campoB.classList.add('error');
            document.querySelector(".btn-error").innerHTML = 'O número A deve ser menor que o número B. O número ' + campoA. value + " é maior ou igual a " + campoB.value;
            document.querySelector(".btn-error").style.display = "block";
            
        }
    })