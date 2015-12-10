drop table empleados
select * from empleados;
create table empleados (id integer NOT NULL AUTO_INCREMENT, apellido varchar(100), categoria int, PRIMARY KEY (id))

insert into empleados (apellido, categoria) values('Gonzalez', 1);
insert into empleados (apellido, categoria) values('Pereyra', 5);
insert into empleados (apellido, categoria) values('Gutierrez', 4);
insert into empleados (apellido, categoria) values('Santo', 2);
insert into empleados (apellido, categoria) values('Liberti', 5);
insert into empleados (apellido, categoria) values('Perez', 5);
insert into empleados (apellido, categoria) values('Rivarola', 5);
insert into empleados (apellido, categoria) values('Andrade', 3);
insert into empleados (apellido, categoria) values('Lucca', 5);
insert into empleados (apellido, categoria) values('Silva', 5);
insert into empleados (apellido, categoria) values('Zambani', 5);
insert into empleados (apellido, categoria) values('Dibari', 4);
insert into empleados (apellido, categoria) values('Delucia', 5);
insert into empleados (apellido, categoria) values('Franco', null);
drop table categorias;
create table categorias (id integer NOT NULL AUTO_INCREMENT, nombre varchar(100), PRIMARY KEY (id))

select * from categoria;

insert into categorias (nombre) values('Gerente general');
insert into categorias (nombre) values('Gerente');
insert into categorias (nombre) values('Sub Gerente');
insert into categorias (nombre) values('Jefe');
insert into categorias (nombre) values('Empleado');
insert into categorias (nombre) values('Cadete');

SELECT e.Id, e.Apellido, c.Id, c.Nombre
FROM Empleados e
INNER JOIN Categorias c 
    ON e.Categoria = c.Id order by 1

SELECT e.Id, e.Apellido, c.Id, c.Nombre
FROM Empleados e
FULL JOIN Categorias c 
    ON e.Categoria = c.Id

SELECT e.Id, e.Apellido, c.Id, c.Nombre FROM Empleados e
LEFT JOIN Categorias c ON e.Categoria = c.Id
UNION ALL
SELECT e.Id, e.Apellido, c.Id, c.Nombre FROM Empleados e
RIGHT JOIN Categorias c ON e.Categoria = c.Id
WHERE e.Id IS NULL

drop table tiponota;
create table periodoacademico (codigoperiodoacademico integer NOT NULL AUTO_INCREMENT, descripcion varchar(100), PRIMARY KEY (codigoperiodoacademico))

drop table tiponota;

create table tiponota (
codigotiponota integer NOT NULL AUTO_INCREMENT, nombre varchar(100), descripcion varchar(100), codigoreferencia varchar(10), estado varchar(1),
PRIMARY KEY (codigotiponota))

ALTER TABLE tiponota ADD CONSTRAINT uc_tiponota UNIQUE (codigoreferencia)

create table tiponotaparcial (
codigotiponota integer, codigoparcial integer,
PRIMARY KEY (codigotiponota,codigoparcial))

create table parcial (
codigoparcial integer NOT NULL AUTO_INCREMENT, nombre varchar(100), descripcion varchar(100), codigoreferencia varchar(10),
PRIMARY KEY (codigoparcial))

ALTER TABLE parcial ADD CONSTRAINT uc_parcial UNIQUE (codigoparcial)


select * from tipoparcial;

create table tipoparcial (
codigotipoparcial integer NOT NULL AUTO_INCREMENT, nombre varchar(100), descripcion varchar(100), codigoreferencia varchar(10), estado varchar(1),
PRIMARY KEY (codigotipoparcial))

alter table tipoparcial add column estado varchar(1);

ALTER TABLE tipoparcial ADD CONSTRAINT uc_tipoparcial UNIQUE (codigotipoparcial)

update tipoparcial set estado = '1';

select * from tipoparcial

create table parcialtipoparcial (
codigoparcial integer, codigotipoparcial integer,
PRIMARY KEY (codigoparcial,codigotipoparcial))

drop table materia;

create table materia (
codigomateria integer NOT NULL AUTO_INCREMENT, nombre varchar(100), descripcion varchar(100), codigoreferencia varchar(10), estado varchar(1),
PRIMARY KEY (codigomateria));

ALTER TABLE materia ADD CONSTRAINT uc_materia UNIQUE (codigoreferencia)

create table paralelo (
codigoparalelo integer NOT NULL AUTO_INCREMENT, nombre varchar(100), descripcion varchar(100), codigoreferencia varchar(10),
PRIMARY KEY (codigoparalelo))

ALTER TABLE paralelo ADD CONSTRAINT uc_paralelo UNIQUE (codigoreferencia)


create table docente (
codigodocente integer NOT NULL AUTO_INCREMENT, 
cedula varchar(100),
nombre varchar(100),
apellido varchar(100),
PRIMARY KEY (codigodocente)
)

ALTER TABLE docente ADD CONSTRAINT uc_docente UNIQUE (cedula)

drop table estudiante;

create table estudiante (
codigoestudiante integer NOT NULL AUTO_INCREMENT, 
cedula varchar(100),
nombre varchar(100),
apellido varchar(100),
PRIMARY KEY (codigoestudiante)
)

ALTER TABLE estudiante ADD CONSTRAINT uc_estudiante UNIQUE (cedula)

drop table curso;

create table curso (
codigocurso integer NOT NULL AUTO_INCREMENT, 
codigomateria integer,
codigoparalelo integer,
codigodocente integer,
codigoperiodoacademico integer,
PRIMARY KEY (codigocurso)
)

ALTER TABLE curso ADD CONSTRAINT uc_curso UNIQUE (codigomateria, codigoparalelo, codigodocente, codigoperiodoacademico)

ALTER TABLE curso ADD COLUMN codigotipocurso integer;

select * from curso;

create table cursoestudiante (
codigocurso integer, 
codigoestudiante integer,
PRIMARY KEY (codigocurso, codigoestudiante)
)

select * from estudiante

drop VIEW v_estudiantes;

CREATE VIEW v_estudiantes AS
select 
codigoestudiante, cedula, nombre, apellido from estudiante

select * from v_estudiantes

drop VIEW v_parcial;

CREATE VIEW v_parcial AS
select 
codigotipoparcial, nombre, descripcion, codigoreferencia from tipoparcial


select * from v_parcial;


drop table cursoestudiantenotas;

drop table notaparcial

create table notaparcial (
codigonotaparcial integer NOT NULL AUTO_INCREMENT, 
codigocurso integer, 
codigoestudiante integer,
codigotipoparcial integer,
valor integer,
PRIMARY KEY (codigonotaparcial)
)

ALTER TABLE notaparcial ADD CONSTRAINT uc_notaparcial UNIQUE (codigocurso, codigoestudiante, codigotipoparcial)



select * from tipoparcial;

insert into tipoparcial (nombre,descripcion,codigoreferencia) values ('Tareas','Tareas','TAR');
insert into tipoparcial ( nombre,descripcion,codigoreferencia) values ('Actuacion clase individual','Actuacion clase individual','ACI');
insert into tipoparcial ( nombre,descripcion,codigoreferencia) values ('Actuacion clase grupal','Actuacion clase grupal','ACG');
insert into tipoparcial ( nombre,descripcion,codigoreferencia) values ('Lecciones','Lecciones','LEC');
insert into tipoparcial ( nombre,descripcion,codigoreferencia) values ('Pruebas','Pruebas','PRU');

select a.* from (select e.codigoestudiante, e.cedula, e.nombre, n.valor ,n.codigotipoparcial

left join tipoparcial p on p.codigotipoparcial = n.codigotipoparcial
where e.nombre like 'an%a%'

select a.*, n.valor from (select e.codigoestudiante, e.cedula, e.nombre, p.codigotipoparcial, lower(p.codigoreferencia) codigoreferencia from v_estudiantes e, v_parcial p) as a
left join cursoestudiantenotas n on (n.codigotipoparcial = a.codigotipoparcial and n.codigoestudiante = a.codigoestudiante)
where
a.cedula in ('1004082507','1002078952')

SELECT * FROM notaparcial
delete from notaparcial;
insert into notaparcial(codigocurso, codigoestudiante, codigotipoparcial, valor) values('1', '1', '1','9');
insert into notaparcial(codigocurso, codigoestudiante, codigotipoparcial, valor) values('1', '1', '5','9');
insert into notaparcial(codigocurso, codigoestudiante, codigotipoparcial, valor) values('1', '1', '3','10');

alter table parcial add column estado varchar(1);
alter table paralelo add column estado varchar(1);
alter table materia add column estado varchar(1);

select * from parcial;

insert into parcial(nombre, descripcion, codigoreferencia, estado) values ('Primera', 'Primera parcial', 'P1', '1');
insert into parcial(nombre, descripcion, codigoreferencia, estado) values ('Segunda', 'Segunda parcial', 'P2', '1');
insert into parcial(nombre, descripcion, codigoreferencia, estado) values ('Tercera', 'Tercera parcial', 'P3', '1');
insert into parcial(nombre, descripcion, codigoreferencia, estado) values ('Examen', 'Examen', 'EXA', '1');

alter table parcial ADD CONSTRAINT uc_parcial UNIQUE (codigoreferencia)

alter table parcial DROP UNIQUE 'uc_parcial'

DROP INDEX uc_parcial ON parcial

select * from information_schema.table_constraints where TABLE_SCHEMA = 'snq' and constraint_name = 'uc_parcial'

drop constraint uc_parcial;

delete from parcial where codigoparcial = 5;

select * from paralelo;
insert into paralelo(nombre, descripcion, codigoreferencia, estado) values ('A', 'Paralelo A', 'A', '1');
insert into paralelo(nombre, descripcion, codigoreferencia, estado) values ('B', 'Paralelo B', 'B', '1');
insert into paralelo(nombre, descripcion, codigoreferencia, estado) values ('C', 'Paralelo C', 'C', '1');


select 
c.*, CONCAT(m.nombre, ' ', p.nombre) AS nombrecurso
from
curso c 
inner join paralelo p on p.codigoparalelo = c.codigoparalelo
inner join materia m on m.codigomateria= c.codigomateria
inner join periodoacademico pa on pa.codigoperiodoacademico = c.codigoperiodoacademico

select * from periodoacademico
insert into periodoacademico(descripcion) values ('Periodo academico 1');

select * from materia
insert into materia(nombre, descripcion, codigoreferencia, estado) values ('Matematicas', 'Matematicas', 'MAT', '1');
insert into materia(nombre, descripcion, codigoreferencia, estado) values ('Geometria', 'Geometria', 'GEO', '1');

select * from curso;
insert into curso(codigomateria, codigoparalelo, codigodocente, codigoperiodoacademico) values (2,1,1,1);

select * from docente;
insert into docente(cedula, nombre, apellido) values ('1002556437', 'Alex', 'Caiza');

drop table tipocurso;

create table tipocurso (
codigotipocurso integer NOT NULL AUTO_INCREMENT, 
nombre varchar(50), 
codigoreferencia varchar(10),
codigonumerico varchar(10),
estado varchar(1),
PRIMARY KEY (codigotipocurso)
)

ALTER TABLE tipocurso ADD CONSTRAINT uc_tipocurso UNIQUE (codigoreferencia)

insert into tipocurso(nombre,codigonumerico,codigoreferencia,estado) values ('Primero','1ro','PRIMERO','1');
insert into tipocurso(nombre,codigonumerico,codigoreferencia,estado) values ('Segundo','1ro','SEGUNDO','1');
insert into tipocurso(nombre,codigonumerico,codigoreferencia,estado) values ('Tercero','1ro','TERCERO','1');
insert into tipocurso(nombre,codigonumerico,codigoreferencia,estado) values ('Cuarto','1ro','CUARTO','1');
insert into tipocurso(nombre,codigonumerico,codigoreferencia,estado) values ('Quinto','1ro','QUINTO','1');
insert into tipocurso(nombre,codigonumerico,codigoreferencia,estado) values ('Sexto','1ro','SEXTO','1');
insert into tipocurso(nombre,codigonumerico,codigoreferencia,estado) values ('Septimo','1ro','SEPTIMO','1');
insert into tipocurso(nombre,codigonumerico,codigoreferencia,estado) values ('Octavo','8','OCTAVO','1');
insert into tipocurso(nombre,codigonumerico,codigoreferencia,estado) values ('Noveno','1ro','NOVENO','1');
insert into tipocurso(nombre,codigonumerico,codigoreferencia,estado) values ('Decimo','1ro','DECIMO','1');

select * from tiponota

insert into tiponota(nombre,descripcion,codigoreferencia,estado) values ('Qimimestre 1','Qimimestre 1','Q1','1');
insert into tiponota(nombre,descripcion,codigoreferencia,estado) values ('Qimimestre 2','Qimimestre 2','Q2','1');
insert into tiponota(nombre,descripcion,codigoreferencia,estado) values ('Recuperacion Q1','Recuperacion Q1','RECQ1','1');
insert into tiponota(nombre,descripcion,codigoreferencia,estado) values ('Recuperacion Q2','Recuperacion Q2','RECQ2','1');
insert into tiponota(nombre,descripcion,codigoreferencia,estado) values ('Examen','Examen','EXA','1');
insert into tiponota(nombre,descripcion,codigoreferencia,estado) values ('Supletorio','Supletorio','SUP','1');
insert into tiponota(nombre,descripcion,codigoreferencia,estado) values ('Remedial','Remedial','REM','1');

select * from parcial

alter table parcial add column tipocomponente varchar(100)
alter table parcial MODIFY column titleid varchar(50)

alter table tiponota add column titleid varchar(20)

select * from tipoparcial

select a.*, lower(p.codigoreferencia) codigoreferencia, p.orden from 
(
select e.codigoestudiante, e.cedula, e.nombre, e.apellido, tnp.codigotiponota, tnp.codigoparcial
from estudiante e, tiponotaparcial tnp
) as a
inner join parcial p on p.codigoparcial = a.codigoparcial
order by a.cedula, p.orden

select * from tiponotaparcial;

insert into tiponotaparcial(codigotiponota, codigoparcial) values (1 ,4)

select * from parcial;

alter table parcial add column orden integer;

select * from parcial;

select * from parcialtipoparcial

select * from tiponotaparcial

alter table tiponotaparcial add column valornota integer

select * from cursoestudiante

select * from tiponotaparcial

select * from tiponota
select * from periodo

create table periodotiponota(
	codigoperiodotiponota integer NOT NULL AUTO_INCREMENT, 
	codigoperiodo integer,
	codigotiponota integer,
	estado varchar(1),
	PRIMARY KEY (codigoperiodotiponota)
)

ALTER TABLE periodotiponota ADD CONSTRAINT uc_periodotiponota UNIQUE (codigoperiodo, codigotiponota)

alter table  tiponotaparcial add column codigotiponotaparcial integer;

SELECT * FROM TIPOPARCIAL;
SELECT * FROM TIPONOTA;


select * from tipocurso;

SELECT * FROM TIPOPARCIAL

select * from PARCIAL

select * from tiponota

alter table tiponota add column tipocomponente varchar (100)

select * from parcial;

select * from dominio;

drop table dominio;

create table dominio(
	codigodominio integer NOT NULL AUTO_INCREMENT, 
	nombre varchar(100),
	descripcion varchar(100),
	nombrecorto varchar(25),
	codigoreferencia varchar(10),
	columna varchar(20),
	nivel integer,
	orden integer,
	estado varchar(1),
	PRIMARY KEY (codigodominio)
)

ALTER TABLE dominio ADD CONSTRAINT uc_dominio UNIQUE (codigoreferencia);

insert into dominio (nombre, codigoreferencia, nivel, estado) values('Periodo academico', 'PA', 1, 1);

insert into dominio (nombre, codigoreferencia, nivel, estado) values('Quimestre', 'Q', 1, 1);
insert into dominio (nombre, codigoreferencia, nivel, estado) values('Quimestre', 'Q1', 1, 1);
insert into dominio (nombre, codigoreferencia, nivel, estado) values('Quimestre', 'Q2', 1, 1);
insert into dominio (nombre, codigoreferencia, nivel, estado) values('Recuperacion', 'REC', 1, 1);
insert into dominio (nombre, codigoreferencia, nivel, estado) values('Supletorio', 'SUP', 1, 1);
insert into dominio (nombre, codigoreferencia, nivel, estado) values('Remedial', 'REM', 1, 1);

insert into dominio (nombre, codigoreferencia, nivel, estado) values('Parcial 1', 'PAR1', 1, 1);
insert into dominio (nombre, codigoreferencia, nivel, estado) values('Parcial 2', 'PAR2', 1, 1);
insert into dominio (nombre, codigoreferencia, nivel, estado) values('Parcial 3', 'PAR3', 1, 1);
insert into dominio (nombre, codigoreferencia, nivel, estado) values('Examen', 'EXA', 1, 1);

select * from dominio order by nivel, orden

select * from periodo

alter table periodo add column codigodominio integer;

drop table periodoconfiguracion;

create table periodoconfiguracion(
	codigoperiodoconfiguracion  integer NOT NULL AUTO_INCREMENT,
	codigoperiodoconfiguracionpadre integer,
	codigoperiodo integer, 
	codigodominio integer,
	codigoreferencia varchar(20),
	descripcion varchar(100),
	orden integer,
	estado varchar(1),
	PRIMARY KEY (codigoperiodoconfiguracion)
)

alter table periodoconfiguracion add column descripcion varchar(100);

select * from periodoconfiguracion;

ALTER TABLE periodoconfiguracion ADD CONSTRAINT uc_periodoconfiguracion UNIQUE (codigoperiodo, codigodominio);

ALTER TABLE periodoconfiguracion ADD CONSTRAINT fk_periodo FOREIGN KEY (codigoperiodo) REFERENCES periodo(codigoperiodo);
ALTER TABLE periodoconfiguracion ADD CONSTRAINT fk_dominio FOREIGN KEY (codigodominio) REFERENCES dominio(codigodominio);


delete from dominio where codigodominio = '12'

select * from dominio

select d.codigoreferencia, pc.* 
from periodoconfiguracion pc inner join dominio d on d.codigodominio = pc.codigodominio order by d.nivel, d.orden;

insert into periodoconfiguracion(codigoperiodo, codigodominio) values(1, 15);
insert into periodoconfiguracion(codigoperiodo, codigodominio) values(1, 15);
insert into periodoconfiguracion(codigoperiodo, codigodominio) values(1, 3);
insert into periodoconfiguracion(codigoperiodo, codigodominio) values(1, 4);
insert into periodoconfiguracion(codigoperiodo, codigodominio) values(1, 5);

insert into periodoconfiguracion(codigoperiodo, codigodominio, codigoperiodoconfiguracionpadre) values(1, 10, 1);
insert into periodoconfiguracion(codigoperiodo, codigodominio, codigoperiodoconfiguracionpadre) values(1, 10, 1);
insert into periodoconfiguracion(codigoperiodo, codigodominio, codigoperiodoconfiguracionpadre) values(1, 10, 1);
insert into periodoconfiguracion(codigoperiodo, codigodominio, codigoperiodoconfiguracionpadre) values(1, 13, 1);

drop table periodo

select * from tipoparcial

create table periodo(
	codigoperiodo integer NOT NULL AUTO_INCREMENT,
	codigodominio integer,
	fechainicio DATETIME,
	fechafin DATETIME,
	estado varchar(1),
	PRIMARY KEY (codigoperiodo)
)

select * from periodoconfiguracion;

insert into periodo(codigodominio)values(7)

select * from periodo

delete from periodo where codigoperiodo = 2

alter table periodoconfiguracion drop unique 'uc_periodoconfiguracion'

ALTER TABLE periodoconfiguracion DROP INDEX uc_periodoconfiguracion

DROP INDEX uc_periodoconfiguracion ON periodoconfiguracion

delete from periodoconfiguracion

select d.codigoreferencia, pc.* 
from periodoconfiguracion pc 
inner join dominio d on d.codigodominio = pc.codigodominio
where 1=1 and d.nivel = 1 and codigoperiodoconfiguracionpadre is null
order by d.nivel, pc.orden

select d.codigoreferencia, pc.* 
from periodoconfiguracion pc 
inner join dominio d on d.codigodominio = pc.codigodominio
where 1=1 and codigoperiodoconfiguracionpadre = '6'
order by d.nivel, pc.orden


update periodoconfiguracion set estado = '1' where codigoperiodoconfiguracion = '1'

select * from periodoconfiguracion
select * from estudiante
select * from cursoestudiante
select * from cursoestudiantenotas
alter table cursoestudiantenotas add column codigotiponota integer

select 
t1.*, 
n.valor 
from
(
select 
e.codigoestudiante, e.cedula, e.nombre, e.apellido, a.* 
from estudiante e,
(
select d.codigoreferencia as codigoreferenciadominio, d.columna, pc.* 
from tiponota pc 
inner join dominio d on d.codigodominio = pc.codigodominio
where 1=1 and codigotiponotapadre = '6'
order by d.nivel, pc.orden
) a
) t1 
left join cursoestudiantenotas n on (n.codigoestudiante = t1.codigoestudiante and  n.codigotiponota = t1.codigotiponota)
where 1=1 
and t1.cedula = '1003001375'

select * from cursoestudiantenotas

insert into periodoconfiguracion(
codigoperiodoconfiguracionpadre,
codigoperiodo,
codigodominio,
estado,
orden,
descripcion
) values (6, 1, 22, 1, 5, 'EXAMEN')

select * from dominio

insert into dominio (
nombre,
codigoreferencia,
columna,
nivel,
orden,
estado
) values ('EXAMEN', 'N5', 'n5','3','5','1');

select * from dominio
where codigodominio in (
select tn.codigodominio from tiponota tn where tn.codigotiponotapadre = '6')

select * from curso

select * from paralelo

select * from cursoestudiantenotas

select * from cursoestudiante

select * from estudiante

insert into cursoestudiante (codigocurso, codigoestudiante)
select codigocurso, codigoestudiante from curso , estudiante where curso.codigocurso = '1'

select tn.* 
from tiponota tn 
inner join dominio d on d.codigodominio = tn.codigodominio
where 1=1
and tn.codigotiponotapadre = '6'
and d.columna = 'n1'

alter table periodo add column anio integer

select * from tipocurso

alter table periodo DROP column estadoperiodo

select * from periodo

select * from curso

select * from dominio

SELECT  c.*  FROM  curso c  WHERE 1=1  and c.codigotipocurso = '1'  and c.codigomateria = '1'  and c.codigoparalelo = '1'  and c.codigoperiodo = '1'

SELECT  tn.*  FROM  tiponota tn  inner join dominio d on d.codigodominio = tn.codigodominio  WHERE 1=1  and tn.codigotiponotapadre = '6'  and d.columna = 'n1'

select * from cursoestudiantenotas