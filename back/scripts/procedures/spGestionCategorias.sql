USE web2;

DROP PROCEDURE IF EXISTS spGestionCategorias;

DELIMITER //

CREATE PROCEDURE spGestionCategorias(
    IN p_Accion CHAR(3),
    IN p_categoryID INT,
    IN p_userID INT,
    IN p_nombre VARCHAR(50),
    IN p_descripcion VARCHAR(300),
    IN p_categoryImage VARCHAR(200)
)
BEGIN
    IF p_Accion = 'IN' THEN
        INSERT INTO Categoria(userID,nombre, descripcion,categoryImage)
        VALUES(p_categoryID,p_nombre, p_descripcion,p_categoryImage);
    END IF;

    IF p_Accion = 'UP' THEN
        UPDATE Categoria
        SET nombre = p_nombre,
            descripcion = p_descripcion
        WHERE categoryID = p_categoryID;
    END IF;

    IF p_Accion = 'BO' THEN
        DELETE FROM Categoria WHERE categoryID = p_categoryID;
    END IF;

    IF p_Accion = 'SE' THEN
        SELECT categoryID, nombre, descripcion,categoryImage
        FROM Categoria
        WHERE userID = p_userID;
    END IF;
END //

DELIMITER ;
