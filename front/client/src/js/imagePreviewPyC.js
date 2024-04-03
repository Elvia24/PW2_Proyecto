// Función para previsualizar la imagen del producto
export function previewImagePF(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var preview = document.getElementById("ImagePA");
        preview.src = reader.result;
        preview.style.display = "block"; // Mostrar la imagen
    };
    reader.readAsDataURL(event.target.files[0]);
}

// Función para previsualizar la imagen de la categoría
export function previewImageCF(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var preview = document.getElementById("ImageCA");
        preview.src = reader.result;
        preview.style.display = "block"; // Mostrar la imagen
    };
    reader.readAsDataURL(event.target.files[0]);
}