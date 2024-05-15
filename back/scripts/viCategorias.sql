USE web2;
DROP VIEW IF EXISTS viCategorias;

CREATE VIEW viCategorias AS
SELECT 
    c.categoryID,
    c.userID ,    
    c.nombre ,
    c.categoryImage,
    c.descripcion,    
    (SELECT COUNT(*) FROM Categoria) AS total

FROM Categoria c
;
