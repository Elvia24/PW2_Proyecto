USE web2;
DROP VIEW IF EXISTS viCompras;

CREATE VIEW viCompras AS
SELECT 
    u.userID AS CompradorID,
    u.username AS Comprador,
    p.nombre AS Producto,
    p.productImage AS Imagen,
    p.precio AS Precio,
    dv.detailID as detalleID,
    dv.cantidad AS CantidadComprada,
    dv.subtotal AS Subtotal,
    v.fecha AS FechaCompra
FROM 
    DetalleVenta dv
JOIN 
    Ventas v ON dv.saleID = v.saleID
JOIN 
    Productos p ON dv.productID = p.productID
JOIN 
    Usuarios u ON v.userID = u.userID

