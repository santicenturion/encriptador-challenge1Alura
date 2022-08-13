// CONSIGNA
// El programa debe reemplazar las vocales por las siguientes palabras:

//e = enter
//i = imes
//a = ai
//o = ober
//u = ufat

//Llamada a etiquetas HTML y creación de variables 

const message = document.querySelector("#message");
const result = document.querySelector("#message2");

const buttonEncrypt = document.querySelector("#encrypt");
const buttonDecrypt  = document.querySelector("#decrypt");
const buttonCopy = document.querySelector("#copy");
const buttonclean = document.querySelector("#clean");

// AVISO SOBRE VALIDACIÓN

swal ("AVISO", "Solo se aceptaran letras y en minúsculas, ningún número ni carácter especial")







// función encriptar


function encrypt(){
  const mssg = message.value;
  const mssgEncrypt = mssg
  .replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("o", "ober")
  .replaceAll("a", "ai")
  .replaceAll("u", "ufat")  
  result.value = mssgEncrypt

}


// Función de desencriptación 

function decrypt(){
  const mssgEncrypt = message.value;
  const mssg = mssgEncrypt
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ober", "o")
  .replaceAll("ai", "a")
  .replaceAll("ufat", "u")
  result.value = mssg
}

// Función para botón de copiar 

function copytext (){
  const mssgEncrypt = result.value
  navigator.clipboard.writeText(mssgEncrypt)
  swal("texto copiado")
}




//BOTONES
buttonEncrypt.onclick = encrypt

buttonDecrypt.onclick = decrypt

buttonCopy.onclick = copytext


// BOTON LIMPIAR
function clean(input){
  input.value= "";
}

buttonclean.addEventListener("click",function(event){
  event.preventDefault();
  let result = document.querySelector("#message2");
  let message = document.querySelector("#message");
  clean(result);
  clean(message)
});
