USE web2;
DROP VIEW IF EXISTS viCarrito;

CREATE VIEW viCarrito AS
SELECT
    c.cartID,
    c.userID,
    c.productID,
    p.nombre AS nombreProducto,
    p.descripcion AS descripcionProducto,
    p.productImage AS imagenProducto,
    p.cantidad AS productosDisponibles,
    c.precio,
    c.cantidad,
    (c.precio * c.cantidad) AS subtotal
FROM
    Carrito c
JOIN
    Productos p ON c.productID = p.productID;