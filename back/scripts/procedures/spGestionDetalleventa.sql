USE web2;

DROP PROCEDURE IF EXISTS spGestionDetalleVenta;

DELIMITER //

CREATE PROCEDURE spGestionDetalleVenta(
    IN p_Accion CHAR(3),
    IN p_detailID INT,
    IN p_saleID INT,
    IN p_productID INT,
    IN p_precio DECIMAL(10,2),
    IN p_cantidad DECIMAL(10,2),
    IN p_subtotal DECIMAL(10,2)
)
BEGIN
    IF p_Accion = 'IN' THEN
        INSERT INTO DetalleVenta(saleID, productID, precio, cantidad, subtotal)
        VALUES(p_saleID, p_productID, p_precio, p_cantidad, p_subtotal);
    END IF;

    IF p_Accion = 'UP' THEN
        UPDATE DetalleVenta
        SET saleID = p_saleID,
            productID = p_productID,
            precio = p_precio,
            cantidad = p_cantidad,
            subtotal = p_subtotal
        WHERE detailID = p_detailID;
    END IF;

    IF p_Accion = 'BO' THEN
        DELETE FROM DetalleVenta WHERE detailID = p_detailID;
    END IF;

    IF p_Accion = 'SE' THEN
        SELECT detailID, saleID, productID, precio, cantidad, subtotal
        FROM DetalleVenta
        WHERE detailID = p_detailID;
    END IF;
END //

DELIMITER ;
