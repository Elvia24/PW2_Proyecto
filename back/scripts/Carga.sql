use web2;

-- Insertar ADMIN
INSERT INTO Usuarios (username, email, passwor, role) 
VALUES ('admin', 'admin@example.com', 'admin123', 0);

-- Insertar una categoría predeterminada
INSERT INTO Categoria (nombre, descripcion) VALUES ('Default', 'Categoría predeterminada para productos sin categorización específica.');
