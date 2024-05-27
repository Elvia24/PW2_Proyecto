USE web2;
DROP VIEW IF EXISTS viVentas;

CREATE VIEW viVentas AS
SELECT 
    u.userID AS VendedorID,
    u.username AS Vendedor,
    p.nombre AS Producto,
    p.productImage AS Imagen,
    p.precio AS Precio,
    dv.detailID as detalleID,
    dv.cantidad AS CantidadVendida,
    dv.subtotal AS Subtotal,
    v.fecha AS FechaVenta
FROM 
    DetalleVenta dv
JOIN 
    Ventas v ON dv.saleID = v.saleID
JOIN 
    Productos p ON dv.productID = p.productID
JOIN 
    Usuarios u ON p.userID = u.userID;
