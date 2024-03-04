    function iniciarRegistro() {
        // Ejecutar la validación de la contraseña antes de redirigir
        if (validarContraseña()) {
        document.getElementById("formulario").submit();
        // Redirigir a la página deseada
        // window.location.href = "../inicio_sesion.html";
        return true;//  Para que se envie el formulario
        } else {
        // Si la validación falla, no se redirige y se detiene el envío del formulario
        alert("Por favor, completa los campos correctamente antes de continuar.");
        return false;
        }
    }



    
    //Validaciones de contraseña
    export function validarContraseña() {
        const contraseña = document.getElementById("psw").value;
        const mensaje = document.getElementById("mensaje");
    
        // Verificar la longitud de la contraseña
        if (contraseña.length < 8) {
        mensaje.textContent = "La contraseña debe tener al menos 8 caracteres.";
        return false;
        }
    
        // Verificar si contiene al menos una mayúscula
        if (!/[A-Z]/.test(contraseña)) {
        mensaje.textContent = "La contraseña debe contener al menos una mayúscula.";
        return false;
        }
    
        // Verificar si contiene al menos una minúscula
        if (!/[a-z]/.test(contraseña)) {
        mensaje.textContent = "La contraseña debe contener al menos una minúscula.";
        return false;
        }
    
        // Verificar si contiene al menos un número
        if (!/\d/.test(contraseña)) {
        mensaje.textContent = "La contraseña debe contener al menos un número.";
        return false;
        }
    
        // Verificar si contiene al menos un carácter especial
        if (!/[^a-zA-Z0-9]/.test(contraseña)) {
        mensaje.textContent = "La contraseña debe contener al menos un carácter especial.";
        return false;
        }
    
        // Si pasa todas las validaciones, mostrar mensaje de éxito
        mensaje.textContent = "";
        return true;
    }
    