USE web2;

DROP PROCEDURE IF EXISTS spGestionProductos;

DELIMITER //

CREATE PROCEDURE spGestionProductos(
    IN p_Accion CHAR(3),
    IN p_productID INT,
    IN p_userID INT,
    IN p_categoryID INT,
    IN p_nombre VARCHAR(50),
    IN p_productImage VARCHAR(200),
    IN p_descripcion VARCHAR(300),
    IN p_precio DECIMAL(10,2),
    IN p_cantidad DECIMAL(10,2),
    IN p_Limit INT, 
    IN p_Offset INT  
)
BEGIN
    IF p_Accion = 'IN' THEN
        INSERT INTO Productos(userID, categoryID, nombre, productImage, descripcion, precio, cantidad, eliminado)
        VALUES(p_userID, p_categoryID, p_nombre, p_productImage, p_descripcion, p_precio, p_cantidad, 0);
    END IF;

    IF p_Accion = 'UP' THEN
        UPDATE Productos
        SET userID = p_userID,
            categoryID = p_categoryID,
            nombre = p_nombre,
            descripcion = p_descripcion,
            precio = p_precio,
            cantidad = p_cantidad,
            productImage = p_productImage
        WHERE productID = p_productID and userID = p_userID;
    END IF;
    
    IF p_Accion = 'UP2' THEN
        UPDATE Productos
        SET cantidad = cantidad - p_cantidad            
        WHERE productID = p_productID;
    END IF;

    IF p_Accion = 'BO' THEN
        UPDATE Productos
        SET eliminado = 1      WHERE productID = p_productID ;
    END IF;

    IF p_Accion = 'SE' THEN
        SELECT productID, userID, categoryID, nombre, productImage, descripcion, precio, cantidad,total,nombreCategoria
        FROM viProductos
        WHERE eliminado <> 1
        LIMIT p_Limit OFFSET p_Offset
        ;
    END IF;

    IF p_Accion = 'SE2' THEN
        SELECT productID, userID, categoryID, nombre, productImage, descripcion, precio, cantidad,nombreCategoria
        FROM viProductos
        WHERE productID = p_productID and eliminado <> 1;
    END IF;
    IF p_Accion = 'SE3' THEN
        SELECT productID, userID, categoryID, nombre,productImage, descripcion, precio, cantidad,nombreCategoria
        FROM viProductos
        WHERE eliminado <> 1;    
    END IF;
    IF p_Accion = 'SE4' THEN
        SELECT productID, userID, categoryID, nombre,productImage, descripcion, precio, cantidad,nombreCategoria
        FROM viProductos
        WHERE userID = p_userID and eliminado <> 1;    
    END IF;
END //

DELIMITER ;