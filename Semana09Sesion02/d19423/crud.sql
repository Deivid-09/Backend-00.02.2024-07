-- CRUD 
-- Create
-- Read
-- Update
-- Delete


insert into tblMascota(nombre, fechaNacimiento,idEspecie, idRaza, idColor, idSexo, idPropietario, usrCreacion, peso)
values('Selina', '2021-06-01', 1,1,1,1,1,1, 6.5);


insert into tblVacunas( descripcion, usrCreacion)
values('Leucemia Felina', 1),
('Virus de la Inmunodeficiencia Felina', 1);

Select * from tblVacunas;

Select 
	id,
    descripcion
 from tblVacunas;
 
update tblVacunas set activo = 0
where id in (1,2);

delete from tblVacunas where id = 6;