const userNumber = document.getElementById("span_form_usuario");
const nickNameInput = document.getElementById("campo_nick_name");
const imgInput = document.getElementById("campo_imagen");
const nameUser1 = document.getElementById("h3_usuario_1");
const nameUser2 = document.getElementById("h3_usuario_2");
const registro = document.getElementById("contentRegistro");
const chat = document.getElementById("contentChat");
var imgUser1 = "";
var imgUser2 = "";

const conversacion = document.getElementById("container__chat");
const mensaje1 = document.getElementById("campo_mensaje_user_1");
const mensaje2 = document.getElementById("campo_mensaje_user_2");

const enviarDatos = () =>{
    if(userNumber.innerText == "Usuario 1"){
        if(nickNameInput.value != ""){
            if(imgInput.value == ""){
                imgUser1 = "https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg";
            }else{
                imgUser1 = imgInput.value;
            }
            nameUser1.innerText = nickNameInput.value;
            nickNameInput.value = "";
            imgInput.value = "";
            userNumber.innerText = "Usuario 2";
        }else{
            alert("Debe ingresar un nombre de usuario");
            nickNameInput.focus();
            return;
        }
    }else if(userNumber.innerText == "Usuario 2"){
        if(nickNameInput.value != ""){
            if(imgInput.value == ""){
                imgUser2 = "https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg";
            }else{
                imgUser2 = imgInput.value;
            }
            nameUser2.innerText = nickNameInput.value;
            nickNameInput.value = "";
            imgInput.value = "";
            registro.setAttribute("style", "display: none;");
            chat.setAttribute("style", "display: block;")
        }else{
            alert("Debe ingresar un nombre de usuario");
            nickNameInput.focus();
            return;
        }
    }else{
        alert(`El Usuario "${userNumber.innerText}" no existe`);
        userNumber.innerText = "Usuario 1";
    }
}

const enviarMensajeUser1 = () =>{
    let hoy = new Date();
    if(hoy.getMinutes() < 10){
        var minutos = "0" + hoy.getMinutes();
    }else{
        var minutos = hoy.getMinutes();
    }
    if(hoy.getHours < 10){
        var horas = "0" + hoy.getHours();
    }else{
        var horas = hoy.getHours();
    }
    let hora = horas + ":" + minutos;
    if(mensaje1.value != ""){
        conversacion.innerHTML += `
            <div class="row my-1">
                <div class="py-4 col-2 border">
                    <img class="align-self-center" src="${imgUser1}" alt="" style="width: 100%;">
                </div>
                <div class="py-2 pe-3 col-10 border">
                    <div class="row">
                        <h5 class="col-11">${nameUser1.innerText}</h5>
                        <button onclick="borrarMensaje(this);" class="col btn btn-danger btn-user-1 ">X</button>
                    </div>
                    <p class="texto">
                        ${mensaje1.value}
                    </p>
                    <section>
                        <p>${hora}</p>
                    </section>
                </div>
            </div>
        `;
        mensaje1.value = "";
        mensaje1.setAttribute("readonly", "");
        mensaje2.removeAttribute("readonly");
    }else{
        alert("No se pueden enviar mensajes vacios!!");
        mensaje1.focus();
        return;
    }
}

const enviarMensajeUser2 = () =>{
    let hoy = new Date();
    if(hoy.getMinutes() < 10){
        var minutos = "0" + hoy.getMinutes();
    }else{
        var minutos = hoy.getMinutes();
    }
    if(hoy.getHours < 10){
        var horas = "0" + hoy.getHours();
    }else{
        var horas = hoy.getHours();
    }
    let hora = horas + ":" + minutos;
    if(mensaje2.value != ""){
        conversacion.innerHTML += `
            <div class="row my-1">
                <div class="py-2 ps-3 col-10 border">
                    <div class="row">
                        <button onclick="borrarMensaje(this);" class="col btn btn-danger btn-user-1 ">X</button>
                        <h5 class="col-11 texto2">${nameUser2.innerText}</h5>
                    </div>
                    <p class="texto2">
                        ${mensaje2.value}
                    </p>
                    <section>
                        <p class="texto2">${hora}</p>
                    </section>
                </div>
                <div class="py-4 col-2 border">
                    <img class="align-self-center" src="${imgUser2}" alt="" style="width: 100%;">
                </div>
            </div>
        `;
        mensaje2.value = "";
        mensaje2.setAttribute("readonly", "");
        mensaje1.removeAttribute("readonly");
    }else{
        alert("No se pueden enviar mensajes vacios!!");
        mensaje2.focus();
        return;
    }
}

const borrarMensaje = (boton) =>{
    let name = boton.previousElementSibling;
    if(name == undefined){
        name = boton.nextElementSibling;
    }
    let mensajeBorrado = document.createElement("DIV");
    mensajeBorrado.setAttribute("class", "row my-1");
    let texto = document.createElement("DIV");
    texto.setAttribute("class", "py-2 pe-3 col-12 border");
    let borrado = document.createElement("P");
    borrado = document.createTextNode(`${name.innerText} Eliminó Este mensaje 🚫`);
    texto.appendChild(borrado);
    mensajeBorrado.appendChild(texto);
    let mensaje = boton.parentElement.parentElement.parentElement;
    mensaje.parentElement.replaceChild(mensajeBorrado, mensaje);
}