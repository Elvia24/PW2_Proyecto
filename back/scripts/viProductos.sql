USE web2;
DROP VIEW IF EXISTS viProductos;

CREATE VIEW viProductos AS
SELECT 
    p.productID,
    p.userID AS productUserID,
    p.categoryID,
    p.nombre AS nombreProducto,
    p.productImage,
    p.descripcion AS descripcionProducto,
    p.precio,
    p.cantidad,
    c.nombre AS nombreCategoria,
    c.descripcion AS descripcionCategoria,
    c.categoryImage
FROM Productos p
JOIN Categoria c ON p.categoryID = c.categoryID;
