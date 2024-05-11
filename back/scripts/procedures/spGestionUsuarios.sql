USE web2;

DROP PROCEDURE IF EXISTS spGestionUsuarios;

DELIMITER //

CREATE PROCEDURE spGestionUsuarios(
    IN p_Accion CHAR(3),
    IN p_userID INT,
    IN p_Username VARCHAR(50),
    IN p_Email VARCHAR(50),
    IN p_Password VARCHAR(50),
    IN p_Direccion VARCHAR(200),
    IN p_userImage mediumblob,
    IN p_Role INT
)
BEGIN
    IF p_Accion = 'IN' THEN
        INSERT INTO Usuarios(username, email, passwor, direccion,userImage, role)
        VALUES(p_Username, p_Email, p_Password, p_Direccion, '', p_Role);
    END IF;

    IF p_Accion = 'UP' THEN
        UPDATE Usuarios
        SET username = p_Username,
            email = p_Email,
            passwor = p_Password,
            direccion = p_Direccion, 
            role = p_Role
        WHERE userID = p_userID;
    END IF;

    IF p_Accion = 'BO' THEN
        DELETE FROM Usuarios WHERE userID = p_userID;
    END IF;

    IF p_Accion = 'SE' THEN
        SELECT userID, username, email,  direccion, role
        FROM Usuarios
        WHERE userID = p_userID;
    END IF;
END //

DELIMITER ;
