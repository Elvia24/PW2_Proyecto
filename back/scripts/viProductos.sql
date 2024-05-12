USE web2;
DROP VIEW IF EXISTS viProductos;

CREATE VIEW viProductos AS
SELECT 
    p.productID,
    p.userID ,
    p.categoryID,
    p.nombre ,
    p.productImage,
    p.descripcion,
    p.precio,
    p.cantidad,
    c.nombre AS nombreCategoria,
    (SELECT COUNT(*) FROM Productos) AS total

FROM Productos p
JOIN Categoria c ON p.categoryID = c.categoryID;
