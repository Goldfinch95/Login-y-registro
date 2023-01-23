//variables
const contenedor_login_register = document.getElementById("contenedor__login-register");
const formulario_login = document.getElementById("formulario__login");
const formulario_register = document.getElementById("formulario__register");
const caja_trasera_login = document.getElementById("caja__trasera-login");
const caja_trasera_register = document.getElementById("caja__trasera-register");
const btn_registrarse = document.getElementById("btn__registrarse");
const btn_iniciarSesion = document.getElementById("btn__iniciar-sesion");

//funciones
const anchoPagina = () =>{
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display ="block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

const iniciarSesion = () =>{

    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

const register = () =>{
    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

//llamando funciones

anchoPagina();
window.addEventListener("resize", anchoPagina);
btn_registrarse.addEventListener("click", register);
btn_iniciarSesion.addEventListener("click", iniciarSesion);
