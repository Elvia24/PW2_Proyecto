USE web2;

DROP PROCEDURE IF EXISTS spGestionCategorias;

DELIMITER //

CREATE PROCEDURE spGestionCategorias(
    IN p_Accion CHAR(3),
    IN p_categoryID INT,
    IN p_userID INT,
    IN p_nombre VARCHAR(50),
    IN p_descripcion VARCHAR(300),
    IN p_categoryImage VARCHAR(200),
     IN p_Limit INT, 
    IN p_Offset INT
)
BEGIN
    IF p_Accion = 'IN' THEN
        INSERT INTO Categoria(userID,nombre, descripcion,categoryImage)
        VALUES(p_categoryID,p_nombre, p_descripcion,p_categoryImage);
    END IF;

    IF p_Accion = 'UP' THEN
        UPDATE Categoria
        SET nombre = p_nombre,
            descripcion = p_descripcion,
            categoryImage = p_categoryImage
        WHERE categoryID = p_categoryID and userID = p_userID;
    END IF;

    IF p_Accion = 'BO' THEN
        DELETE FROM Categoria WHERE categoryID = p_categoryID and userID = p_userID;
    END IF;

    IF p_Accion = 'SE' THEN
        SELECT categoryID, nombre, descripcion,categoryImage
        FROM Categoria
        WHERE userID = p_userID;
    END IF;
    
    IF p_Accion = 'SE2' THEN
        SELECT categoryID, nombre, descripcion
        FROM Categoria
        ;
    END IF;
    
    IF p_Accion = 'SE3' THEN
        SELECT categoryID, nombre, descripcion,categoryImage,total
        FROM viCategorias
        LIMIT p_Limit OFFSET p_Offset;
    END IF;
END //

DELIMITER ;
