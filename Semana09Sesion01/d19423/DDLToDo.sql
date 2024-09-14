

DROP TABLE IF EXISTS tblMascotaVacuna;

DROP TABLE IF EXISTS tblMascota;
DROP TABLE IF EXISTS tblPropietario;


DROP TABLE IF EXISTS tblEspecie;
DROP TABLE IF EXISTS tblVacunas;
DROP TABLE IF EXISTS tblRaza;
DROP TABLE IF EXISTS tblColor;
DROP TABLE IF EXISTS tblSexo;
DROP TABLE IF EXISTS tblNacionalidad;
DROP TABLE IF EXISTS tblUbigeo;

DROP TABLE IF EXISTS tblUsuario;
create table tblUsuario( 
	id int primary key AUTO_INCREMENT,
    username varchar(50) not null unique,
    password varchar(256) not null,
    email varchar(100) not null unique,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblUsuario( username, password, email, usrCreacion)
values('rpineda', 'qwerty', 'rpineda@x-codec.net', 1);


create table tblVacunas( 
	id int primary key AUTO_INCREMENT,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblVacunas( descripcion, usrCreacion)
values('TripleFelina', 1),
('Anti Rabia', 1);



create table tblEspecie( 
	id int primary key AUTO_INCREMENT,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblEspecie( descripcion, usrCreacion)
values('Gatos', 1),
('Perros',1);



create table tblRaza( 
	id int primary key AUTO_INCREMENT,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblRaza( descripcion, usrCreacion)
values('Mestizo', 1);



create table tblColor( 
	id int primary key AUTO_INCREMENT,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblColor( descripcion, usrCreacion)
values('Blanco', 1),
('Negro', 1);


create table tblSexo( 
	id int primary key AUTO_INCREMENT,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblSexo( descripcion, usrCreacion)
values('Hembra', 1),
('Macho', 1);




create table tblNacionalidad( 
	id int primary key AUTO_INCREMENT,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblNacionalidad( descripcion, usrCreacion)
values('Peruano', 1),
('Ecuatorino', 1);



create table tblUbigeo( 
	ubigeo varchar(6) primary key,
    departamento varchar(50) not null,
    provincia varchar(50) not null,
    distrito varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblUbigeo( ubigeo,departamento,provincia, distrito,usrCreacion)
values('130115','LAMBAYEQUE','CHICLAYO','LA VICTORIA', 1),
('140133','LIMA','LIMA','JESUS MARIA', 1);



create table tblPropietario(
	id int primary key AUTO_INCREMENT,
    nombres varchar(100) not null,
    apellidos varchar(100) not null,
    email varchar(100) not null,
    telefono varchar(25) null,
    ubigeo varchar(6) not null,
    direccion varchar(256) null,
    idNacionalidad int not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (ubigeo) references tblUbigeo(ubigeo),
    FOREIGN KEY (idNacionalidad) references tblNacionalidad(id)
);

insert into tblPropietario(nombres, apellidos, email, telefono, ubigeo, direccion, idNacionalidad, usrCreacion)
values('Roberto David', 'Pineda Lopez', 'rpineda@x-codec.net', '916730940', '130115', 'La Victoria de chiclayo', 1,1);

-- select * from tblPropietario;


create table tblMascota(
	id int primary key AUTO_INCREMENT,
    nombre varchar(50) not null,
    fechaNacimiento date null,
    peso decimal(5,3) null default 0,
    temperatura decimal(3,2)  null default 0,
    idEspecie int not null,
    idRaza int not null,
    idColor int not null,
    idSexo int not null,
    idPropietario int not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (idEspecie) REFERENCES tblEspecie(id),
    FOREIGN KEY (idRaza) REFERENCES tblRaza(id),
    FOREIGN KEY (idColor) REFERENCES tblColor(id),
    FOREIGN KEY (idSexo) REFERENCES tblSexo(id),
    FOREIGN KEY (idPropietario) REFERENCES tblPropietario(id)
);

insert into tblMascota(nombre, fechaNacimiento,idEspecie, idRaza, idColor, idSexo, idPropietario, usrCreacion, peso)
values('Pancho', '2022-06-01', 1,1,1,1,1,1, 99.99);


create table tblMascotaVacuna(
	id int primary key AUTO_INCREMENT,
    idMascota int not null,
    idVacuna int not null,
    fechaAplicacion date null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (idMascota) REFERENCES tblMascota(id),
    FOREIGN KEY (idVacuna) REFERENCES tblVacunas(id)
);

insert into tblMascotaVacuna(idMascota, idVacuna, fechaAplicacion, usrCreacion)
values(1,1,'2021-09-01',1),
(1,2,'2021-09-01',1);

select * from tblMascota;
