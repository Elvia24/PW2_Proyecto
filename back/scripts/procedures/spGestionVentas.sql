USE web2;

DROP PROCEDURE IF EXISTS spGestionVentas;

DELIMITER //

CREATE PROCEDURE spGestionVentas(
    IN p_Accion CHAR(3),
    IN p_saleID INT,
    IN p_userID INT,
    IN p_fecha DATE,
    IN p_pago DECIMAL(10,2),
    IN p_total DECIMAL(10,2)
)
BEGIN
    IF p_Accion = 'IN' THEN
        INSERT INTO Ventas(userID, fecha, pago, total)
        VALUES(p_userID, p_fecha, p_pago, p_total);
        SELECT LAST_INSERT_ID() AS new_saleID;
    END IF;

    IF p_Accion = 'UP' THEN
        UPDATE Ventas
        SET userID = p_userID,
            fecha = p_fecha,
            pago = p_pago,
            total = p_total
        WHERE saleID = p_saleID;
    END IF;

    IF p_Accion = 'BO' THEN
        DELETE FROM Ventas WHERE saleID = p_saleID;
    END IF;

    IF p_Accion = 'SE' THEN
        SELECT saleID, userID, fecha, pago, total
        FROM Ventas
        WHERE saleID = p_saleID;
    END IF;
END //

DELIMITER ;
 