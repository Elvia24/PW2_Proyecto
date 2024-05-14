use web2;

DROP TABLE IF EXISTS DetalleVenta;
CREATE TABLE DetalleVenta
(
  detailID INT auto_increment PRIMARY KEY NOT NULL, -- PK 
  saleID INT NOT NULL, -- FK a la tabla Ventas
  productID INT NOT NULL, -- FK a la tabla Productos
  precio DECIMAL(10,2) not null,
  cantidad DECIMAL(10,2) not null,
  subtotal DECIMAL(10,2) not null
);

DROP TABLE IF EXISTS Carrito;
CREATE TABLE Carrito
(
  cartID INT auto_increment PRIMARY KEY NOT NULL, -- PK 
  saleID INT NOT NULL, -- FK a la tabla Ventas
  productID INT NOT NULL, -- FK a la tabla Productos
  precio DECIMAL(10,2) not null,
  cantidad DECIMAL(10,2) not null 
);

DROP TABLE IF EXISTS Ventas;
CREATE TABLE Ventas
(
  saleID INT auto_increment PRIMARY KEY NOT NULL, -- PK 
  userID INT NOT NULL, -- FK a la tabla Usuario
  fecha DATE NOT NULL, 
  pago DECIMAL(10,2) not null,
  total DECIMAL(10,2) not null 
);

DROP TABLE IF EXISTS Productos;
CREATE TABLE Productos
(
  productID INT auto_increment PRIMARY KEY NOT NULL, -- PK 
  userID INT NOT NULL, -- FK a la tabla Usuario
  categoryID INT NOT NULL, -- FK a la tabla Categoria
  nombre VARCHAR(50) not null,
  productImage VARCHAR(200),
  descripcion VARCHAR(300),  
  precio DECIMAL(10,2) NOT NULL,
  cantidad DECIMAL(10,2) NOT NULL
);



DROP TABLE IF EXISTS Categoria;
CREATE TABLE Categoria
(
  categoryID INT auto_increment PRIMARY KEY NOT NULL, -- PK
  userID INT NOT NULL, -- FK a la tabla Usuario
  nombre VARCHAR(50) NOT NULL unique,
  descripcion VARCHAR(300) NOT NULL,
  categoryImage VARCHAR(200)
);

DROP TABLE IF EXISTS Usuarios;
CREATE TABLE Usuarios
(
userID INT auto_increment PRIMARY KEY NOT NULL, -- PK 
username VARCHAR(50)  NOT NULL, 
email VARCHAR(50) NOT NULL, 
passwor VARCHAR(50)  NOT NULL, 
direccion VARCHAR(200) ,
userImage VARCHAR(250),
role INT NOT NULL  -- 0=admin, 1=vendedor, 2=cliente
);


ALTER TABLE Productos
	ADD CONSTRAINT FK_UsuLista_iDUsuario   FOREIGN KEY (userID) REFERENCES Usuarios(userID),
    ADD CONSTRAINT FK_UsuLista_iDUsuario2   FOREIGN KEY (categoryID) REFERENCES Categoria(categoryID);
    
ALTER TABLE Categoria	
    ADD CONSTRAINT FK_UsuLisdta_iDUsuario2   FOREIGN KEY (userID) REFERENCES Usuarios(userID);

ALTER TABLE Ventas
	ADD CONSTRAINT FK_UsuLista_iDUsuario3   FOREIGN KEY (userID) REFERENCES Usuarios(userID);
    
ALTER TABLE DetalleVenta
	ADD CONSTRAINT FK_UsuLista_iDUsuario4   FOREIGN KEY (saleID) REFERENCES Ventas(saleID),
    ADD CONSTRAINT FK_UsuLista_iDUsuario5   FOREIGN KEY (productID) REFERENCES Productos(productID);
    
ALTER TABLE Carrito
	ADD CONSTRAINT FK_UsuLista_iDUsuario6   FOREIGN KEY (saleID) REFERENCES Ventas(saleID),
    ADD CONSTRAINT FK_UsuLista_iDUsuario7   FOREIGN KEY (productID) REFERENCES Productos(productID);




    
