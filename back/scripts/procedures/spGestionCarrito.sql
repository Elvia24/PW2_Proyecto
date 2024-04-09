USE web2;

DROP PROCEDURE IF EXISTS spGestionCarrito;

DELIMITER //

CREATE PROCEDURE spGestionCarrito(
    IN p_Accion CHAR(3),
    IN p_cartID INT,
    IN p_saleID INT,
    IN p_productID INT,
    IN p_precio DECIMAL(10,2),
    IN p_cantidad DECIMAL(10,2)
)
BEGIN
    IF p_Accion = 'IN' THEN
        INSERT INTO Carrito(saleID, productID, precio, cantidad)
        VALUES(p_saleID, p_productID, p_precio, p_cantidad);
    END IF;

    IF p_Accion = 'UP' THEN
        UPDATE Carrito
        SET saleID = p_saleID,
            productID = p_productID,
            precio = p_precio,
            cantidad = p_cantidad
        WHERE cartID = p_cartID;
    END IF;

    IF p_Accion = 'BO' THEN
        DELETE FROM Carrito WHERE cartID = p_cartID;
    END IF;

    IF p_Accion = 'SE' THEN
        SELECT cartID, saleID, productID, precio, cantidad
        FROM Carrito
        WHERE cartID = p_cartID;
    END IF;
END //

DELIMITER ;
