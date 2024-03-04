USE web2;

DROP PROCEDURE IF EXISTS spLoginUsuario;

DELIMITER //

CREATE PROCEDURE spLoginUsuario (
    IN p_Username VARCHAR(30),
    IN p_Contrasena VARCHAR(30)
)
BEGIN
    SELECT userID, username, email, passwor, direccion, role
    FROM Usuarios
    WHERE username = p_Username AND passwor = p_Contrasena;
END //

DELIMITER ;