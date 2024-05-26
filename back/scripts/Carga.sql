use web2;

-- Insertar ADMIN
INSERT INTO Usuarios (username, email, passwor, role) 
VALUES ('admin', 'admin@example.com', 'admin123', 0);

-- Insertar una categoría predeterminada
INSERT INTO Categoria (userID,nombre, descripcion,categoryImage,eliminado) VALUES (1,'Default', 'Categoría predeterminada para productos sin categorización específica.','',0);
