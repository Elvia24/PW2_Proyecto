USE web2;

DROP PROCEDURE IF EXISTS spGestionCarrito;

DELIMITER //

CREATE PROCEDURE spGestionCarrito(
    IN p_Accion CHAR(3),
    IN p_cartID INT,
    IN p_userID INT,
    IN p_productID INT,
    IN p_precio DECIMAL(10,2),
    IN p_cantidad DECIMAL(10,2)
)
BEGIN
	DECLARE existingCartID INT;
	DECLARE existingCantidad DECIMAL(10,2);
    
    IF p_Accion = 'IN' THEN
        -- Verificar si ya existe un producto en el carrito con el mismo userID y productID
        SELECT cartID, cantidad INTO existingCartID, existingCantidad
        FROM Carrito
        WHERE userID = p_userID AND productID = p_productID
        LIMIT 1;

        IF existingCartID IS NOT NULL THEN
            -- Actualizar la cantidad del producto existente en el carrito
            UPDATE Carrito
            SET cantidad = existingCantidad + p_cantidad
            WHERE cartID = existingCartID;
        ELSE
            -- Insertar un nuevo producto en el carrito si no existe
            INSERT INTO Carrito(userID, productID, precio, cantidad)
            VALUES(p_userID, p_productID, p_precio, p_cantidad);
        END IF;
    END IF;

    IF p_Accion = 'UP' THEN
        UPDATE Carrito
        SET 
            cantidad = p_cantidad
        WHERE userID = p_userID and productID = p_productID;
    END IF;

    IF p_Accion = 'BO' THEN
        DELETE FROM Carrito WHERE userID = p_userID and productID = p_productID;
    END IF;
    
    IF p_Accion = 'BO2' THEN
        DELETE FROM Carrito WHERE userID = p_userID ;
    END IF;

    IF p_Accion = 'SE' THEN
        SELECT 
            cartID, 
            userID, 
            productID, 
            nombreProducto,
            descripcionProducto,
            imagenProducto,
            productosDisponibles,
            precio, 
            cantidad,
            subtotal
        FROM viCarrito
        WHERE userID = p_userID;
    END IF;
END //

DELIMITER ;