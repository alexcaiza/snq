-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.5.22


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema snq
--

CREATE DATABASE IF NOT EXISTS snq;
USE snq;

--
-- Temporary table structure for view `v_estudiantes`
--
DROP TABLE IF EXISTS `v_estudiantes`;
DROP VIEW IF EXISTS `v_estudiantes`;
CREATE TABLE `v_estudiantes` (
  `codigoestudiante` int(10) unsigned,
  `cedula` varchar(45),
  `nombre` varchar(45),
  `apellido` varchar(45)
);

--
-- Temporary table structure for view `v_parcial`
--
DROP TABLE IF EXISTS `v_parcial`;
DROP VIEW IF EXISTS `v_parcial`;
CREATE TABLE `v_parcial` (
  `codigotipoparcial` int(11),
  `nombre` varchar(100),
  `descripcion` varchar(100),
  `codigoreferencia` varchar(10)
);

--
-- Definition of table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categorias`
--

/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` (`id`,`nombre`) VALUES 
 (1,'Gerente general'),
 (2,'Gerente'),
 (3,'Sub Gerente'),
 (4,'Jefe'),
 (5,'Empleado'),
 (6,'Cadete');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;


--
-- Definition of table `curso`
--

DROP TABLE IF EXISTS `curso`;
CREATE TABLE `curso` (
  `codigocurso` int(11) NOT NULL AUTO_INCREMENT,
  `codigomateria` int(11) DEFAULT NULL,
  `codigoparalelo` int(11) DEFAULT NULL,
  `codigodocente` int(11) DEFAULT NULL,
  `codigoperiodo` int(11) DEFAULT NULL,
  `codigotipocurso` int(11) DEFAULT NULL,
  PRIMARY KEY (`codigocurso`),
  UNIQUE KEY `uc_curso` (`codigomateria`,`codigoparalelo`,`codigodocente`,`codigoperiodo`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `curso`
--

/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` (`codigocurso`,`codigomateria`,`codigoparalelo`,`codigodocente`,`codigoperiodo`,`codigotipocurso`) VALUES 
 (1,1,1,1,1,1),
 (3,1,2,1,1,1),
 (5,3,1,1,1,1);
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;


--
-- Definition of table `cursoestudiante`
--

DROP TABLE IF EXISTS `cursoestudiante`;
CREATE TABLE `cursoestudiante` (
  `codigocurso` int(11) NOT NULL DEFAULT '0',
  `codigoestudiante` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`codigocurso`,`codigoestudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cursoestudiante`
--

/*!40000 ALTER TABLE `cursoestudiante` DISABLE KEYS */;
INSERT INTO `cursoestudiante` (`codigocurso`,`codigoestudiante`) VALUES 
 (1,1),
 (1,2),
 (1,3),
 (1,4),
 (1,5),
 (1,6),
 (1,7),
 (1,8),
 (1,9),
 (1,10),
 (1,11),
 (1,12),
 (1,13),
 (1,14),
 (1,15),
 (1,16),
 (1,17),
 (1,18),
 (1,19),
 (1,20),
 (1,21),
 (1,22),
 (1,23),
 (1,24),
 (1,25),
 (1,26),
 (1,27),
 (1,28),
 (1,29),
 (1,30),
 (1,31),
 (1,32),
 (1,33),
 (1,34),
 (1,35),
 (1,36),
 (1,37),
 (1,38),
 (1,39),
 (1,40),
 (1,41),
 (1,42),
 (1,43),
 (1,44),
 (1,45),
 (1,46),
 (1,47),
 (1,48),
 (1,49),
 (1,50),
 (1,51),
 (1,52),
 (1,53),
 (1,54),
 (1,55),
 (1,56),
 (1,57),
 (1,58),
 (1,59),
 (1,60),
 (1,61),
 (1,62),
 (1,63),
 (1,64),
 (1,65),
 (1,66),
 (1,67),
 (1,68),
 (1,69),
 (1,70),
 (1,71),
 (1,72),
 (1,73),
 (1,74),
 (1,75),
 (1,76),
 (1,77),
 (1,78),
 (1,79),
 (1,80),
 (1,81),
 (1,82),
 (1,83),
 (1,84),
 (1,85),
 (1,86),
 (1,87),
 (1,88),
 (1,89),
 (1,90),
 (1,91),
 (1,92),
 (1,93),
 (1,94),
 (1,95),
 (1,96),
 (1,97),
 (1,98),
 (1,99),
 (1,100),
 (1,101),
 (1,102);
/*!40000 ALTER TABLE `cursoestudiante` ENABLE KEYS */;


--
-- Definition of table `cursoestudiantenotas`
--

DROP TABLE IF EXISTS `cursoestudiantenotas`;
CREATE TABLE `cursoestudiantenotas` (
  `codigocursoestudiantenotas` int(11) NOT NULL AUTO_INCREMENT,
  `codigocurso` int(11) NOT NULL,
  `codigoestudiante` int(11) NOT NULL,
  `codigotipoparcial` int(11) DEFAULT NULL,
  `valor` int(11) DEFAULT NULL,
  `codigotiponota` int(11) NOT NULL,
  PRIMARY KEY (`codigocursoestudiantenotas`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cursoestudiantenotas`
--

/*!40000 ALTER TABLE `cursoestudiantenotas` DISABLE KEYS */;
INSERT INTO `cursoestudiantenotas` (`codigocursoestudiantenotas`,`codigocurso`,`codigoestudiante`,`codigotipoparcial`,`valor`,`codigotiponota`) VALUES 
 (3,1,1,NULL,8,17),
 (4,1,2,NULL,10,17),
 (5,1,1,NULL,8,18),
 (8,1,1,NULL,10,16),
 (9,1,2,NULL,5,16),
 (10,1,3,NULL,8,16),
 (11,1,4,NULL,8,16),
 (12,1,5,NULL,9,16),
 (13,1,6,NULL,10,16),
 (14,1,7,NULL,5,16),
 (15,1,7,NULL,10,4),
 (16,1,1,NULL,10,4),
 (17,1,8,NULL,8,16),
 (18,1,1,NULL,10,9),
 (19,1,2,NULL,20,9),
 (20,1,3,NULL,10,9),
 (21,1,4,NULL,10,9),
 (22,1,1,NULL,5,19),
 (23,1,1,NULL,10,20),
 (24,1,3,NULL,10,17),
 (25,1,4,NULL,10,17),
 (26,1,5,NULL,10,17),
 (27,1,6,NULL,10,17),
 (28,1,7,NULL,10,17),
 (29,1,1,NULL,10,10),
 (30,1,2,NULL,10,10),
 (31,1,3,NULL,10,10),
 (32,1,4,NULL,10,10),
 (33,1,5,NULL,10,10);
/*!40000 ALTER TABLE `cursoestudiantenotas` ENABLE KEYS */;


--
-- Definition of table `docente`
--

DROP TABLE IF EXISTS `docente`;
CREATE TABLE `docente` (
  `codigodocente` int(11) NOT NULL AUTO_INCREMENT,
  `cedula` varchar(100) NOT NULL,
  `nombres` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `codigousuario` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`codigodocente`),
  UNIQUE KEY `uc_docente` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `docente`
--

/*!40000 ALTER TABLE `docente` DISABLE KEYS */;
INSERT INTO `docente` (`codigodocente`,`cedula`,`nombres`,`apellidos`,`estado`,`codigousuario`) VALUES 
 (1,'1002556437','Alex','Caiza','1',421);
/*!40000 ALTER TABLE `docente` ENABLE KEYS */;


--
-- Definition of table `dominio`
--

DROP TABLE IF EXISTS `dominio`;
CREATE TABLE `dominio` (
  `codigodominio` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `nombrecorto` varchar(25) DEFAULT NULL,
  `codigoreferencia` varchar(10) DEFAULT NULL,
  `columna` varchar(20) DEFAULT NULL,
  `nivel` int(11) DEFAULT NULL,
  `orden` int(11) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `componente` varchar(100) DEFAULT NULL,
  `componenteid` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`codigodominio`),
  UNIQUE KEY `uc_dominio` (`codigoreferencia`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dominio`
--

/*!40000 ALTER TABLE `dominio` DISABLE KEYS */;
INSERT INTO `dominio` (`codigodominio`,`nombre`,`descripcion`,`nombrecorto`,`codigoreferencia`,`columna`,`nivel`,`orden`,`estado`,`componente`,`componenteid`) VALUES 
 (3,'Recuperacion',NULL,NULL,'REC','recuperacion',1,2,'1',NULL,NULL),
 (4,'Supletorio',NULL,NULL,'SUP','supletorio',1,3,'1',NULL,NULL),
 (5,'Remedial',NULL,NULL,'REM','remedial',1,4,'1',NULL,NULL),
 (7,'Periodo academico',NULL,NULL,'PA','periodo',0,1,'1',NULL,NULL),
 (10,'Parcial',NULL,NULL,'PAR','parcial',2,1,'1','LoginAppDemo.view.notas.NotaParcial','titleNotaParcialTB'),
 (13,'Examen',NULL,NULL,'EXA','examen',2,2,'1','LoginAppDemo.view.notas.ExamenQuimestreView','titleExamenQuimestreTB'),
 (15,'Quimestre',NULL,NULL,'Q','quimestre',1,1,'1',NULL,NULL),
 (16,'Recuperacion Q1',NULL,NULL,'RQ1','recuperacionq1',2,1,'1',NULL,NULL),
 (17,'Recuperacion Q2',NULL,NULL,'RQ2','recuperacionq2',2,2,'1',NULL,NULL),
 (18,'TRABAJO ACADEMICO INDEPENDIENTE (TAREAS)',NULL,NULL,'N1','n1',3,1,'1',NULL,NULL),
 (19,'ACTIVIDADES INDIVIDUALES EN CLASE',NULL,NULL,'N2','n2',3,2,'1',NULL,NULL),
 (20,'ACTIVIDADES GRUPALES EN CLASE',NULL,NULL,'N3','n3',3,3,'1',NULL,NULL),
 (21,'LECCIONES',NULL,NULL,'N4','n4',3,4,'1',NULL,NULL),
 (22,'EXAMEN',NULL,NULL,'N5','n5',3,5,'1',NULL,NULL);
/*!40000 ALTER TABLE `dominio` ENABLE KEYS */;


--
-- Definition of table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
CREATE TABLE `empleado` (
  `codigoempleado` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `codigousuario` int(10) unsigned DEFAULT NULL,
  `nombres` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `cedula` varchar(10) DEFAULT NULL,
  `genero` char(1) DEFAULT NULL,
  `edad` int(10) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `direccion` varchar(400) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `celular` varchar(10) DEFAULT NULL,
  `codigousuariobiometrico` int(10) unsigned DEFAULT NULL,
  `imagen` varchar(15) DEFAULT NULL,
  `CEDULACOMODIN` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`codigoempleado`),
  UNIQUE KEY `CSTEMPLEADOCEDULA` (`cedula`),
  UNIQUE KEY `cedula` (`cedula`),
  UNIQUE KEY `cedula_2` (`cedula`),
  KEY `FK_empleado_usuario` (`codigousuario`),
  CONSTRAINT `FK_empleado_usuario` FOREIGN KEY (`codigousuario`) REFERENCES `usuario` (`codigousuario`)
) ENGINE=InnoDB AUTO_INCREMENT=800 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empleado`
--

/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` (`codigoempleado`,`codigousuario`,`nombres`,`apellidos`,`cedula`,`genero`,`edad`,`email`,`estado`,`direccion`,`telefono`,`celular`,`codigousuariobiometrico`,`imagen`,`CEDULACOMODIN`) VALUES 
 (686,316,'Elizabeth','Diaz','1004082507','',20,'ediaz@salesianosibarra.edu.ec','1',NULL,'','',1,NULL,NULL),
 (687,317,'Nelly','Beltran','1002078952',NULL,NULL,NULL,'1',NULL,NULL,NULL,2,NULL,NULL),
 (688,318,'Luis','Beltran','1005246861',NULL,NULL,NULL,'1',NULL,NULL,NULL,3,NULL,NULL),
 (689,319,'Richard','Encalada','1004198774',NULL,NULL,NULL,'1',NULL,NULL,NULL,5,NULL,NULL),
 (690,320,'Amparo','Carbali','1001663754',NULL,NULL,NULL,'1',NULL,NULL,NULL,6,NULL,NULL),
 (691,321,'Sonia','Castro','1001705688',NULL,NULL,NULL,'1',NULL,NULL,NULL,7,NULL,NULL),
 (692,322,'Carolina','Flores','1002271441',NULL,NULL,NULL,'1',NULL,NULL,NULL,8,NULL,NULL),
 (693,323,'Mireya','Cerpa','1004093397',NULL,NULL,NULL,'1',NULL,NULL,NULL,9,NULL,NULL),
 (694,324,'Fernanda','Ramos','1003866330',NULL,NULL,NULL,'1',NULL,NULL,NULL,10,NULL,NULL),
 (695,325,'Marina','Bastidas','1002450946',NULL,NULL,NULL,'1',NULL,NULL,NULL,11,NULL,NULL),
 (696,326,'Ricardo','Chiriboga','1001294212',NULL,NULL,NULL,'1',NULL,NULL,NULL,12,NULL,NULL),
 (697,327,'Telmo','Estevez','1001404563',NULL,NULL,NULL,'1',NULL,NULL,NULL,14,NULL,NULL),
 (698,328,'Elena','Maria','1001859840',NULL,NULL,NULL,'1',NULL,NULL,NULL,15,NULL,NULL),
 (699,329,'Marlene','Gomez','1001532991',NULL,NULL,NULL,'1',NULL,NULL,NULL,17,NULL,NULL),
 (700,330,'Vinicio','Garcia','1001405040',NULL,NULL,NULL,'1',NULL,NULL,NULL,16,NULL,NULL),
 (701,331,'Sonia','Guerra','1002072849',NULL,NULL,NULL,'1',NULL,NULL,NULL,19,NULL,NULL),
 (702,332,'Ronald','Hidrobo','1004766448',NULL,NULL,NULL,'1',NULL,NULL,NULL,21,NULL,NULL),
 (703,333,'Magaly','Rosero','1002564431',NULL,NULL,NULL,'1',NULL,NULL,NULL,20,NULL,NULL),
 (704,334,'Marco','Jaramillo','1050411139',NULL,NULL,NULL,'1',NULL,NULL,NULL,23,NULL,NULL),
 (705,335,'Fabian','Macias','1004572317',NULL,NULL,NULL,'1',NULL,NULL,NULL,25,NULL,NULL),
 (706,336,'Margarita','Cevallos','1001665155',NULL,NULL,NULL,'1',NULL,NULL,NULL,24,NULL,NULL),
 (707,337,'Cosme','Mejia','1003412044',NULL,NULL,NULL,'1',NULL,NULL,NULL,26,NULL,NULL),
 (708,338,'Edgar','Naranjo','1003995550',NULL,NULL,NULL,'1',NULL,NULL,NULL,29,NULL,NULL),
 (709,339,'Miriam','Munioz','1001712544',NULL,NULL,NULL,'1',NULL,NULL,NULL,28,NULL,NULL),
 (710,340,'Rosa','Ortega','1001862893',NULL,NULL,NULL,'1',NULL,NULL,NULL,30,NULL,NULL),
 (711,341,'Jessica','Freire','1004267363',NULL,NULL,NULL,'1',NULL,NULL,NULL,34,NULL,NULL),
 (712,342,'Juan','Perez','1001358835',NULL,NULL,NULL,'1',NULL,NULL,NULL,35,NULL,NULL),
 (713,343,'Estefano','Palacios','1001842739','',20,'','1',NULL,'111111111','2222222222',32,NULL,NULL),
 (714,344,'Marco','Perez','400685160',NULL,NULL,NULL,'1',NULL,NULL,NULL,33,NULL,NULL),
 (715,345,'Cumanda','Regalado','1102020474',NULL,NULL,NULL,'1',NULL,NULL,NULL,38,NULL,NULL),
 (716,346,'FranKlin','Valenzuela','1721059150',NULL,NULL,NULL,'1',NULL,NULL,NULL,39,NULL,NULL),
 (717,347,'Wilson','Pozo','400763298',NULL,NULL,NULL,'1',NULL,NULL,NULL,36,NULL,NULL),
 (718,348,'Rosario','Quito','1001483161',NULL,NULL,NULL,'1',NULL,NULL,NULL,37,NULL,NULL),
 (719,349,'Sara','Rosero','401037502',NULL,NULL,NULL,'1',NULL,NULL,NULL,42,NULL,NULL),
 (720,350,'Janeth','Sandoval','1003977996',NULL,NULL,NULL,'1',NULL,NULL,NULL,43,NULL,NULL),
 (721,351,'Fany','Rivera','1002302345',NULL,NULL,NULL,'1',NULL,NULL,NULL,40,NULL,NULL),
 (722,352,'Cristina','Montenegro','1003001375',NULL,NULL,NULL,'1',NULL,NULL,NULL,41,NULL,NULL),
 (723,353,'Maria','Toasa','1004549307',NULL,NULL,NULL,'1',NULL,NULL,NULL,46,NULL,NULL),
 (724,354,'Inazio','Arrieta','1722495965',NULL,NULL,NULL,'1',NULL,NULL,NULL,47,NULL,NULL),
 (725,355,'Washington','Suasti','1005249642',NULL,NULL,NULL,'1',NULL,NULL,NULL,44,NULL,NULL),
 (726,356,'Hugo','Teran','1001758315',NULL,NULL,NULL,'1',NULL,NULL,NULL,45,NULL,NULL),
 (727,357,'Zulema','Yepez','1001512480',NULL,NULL,NULL,'1',NULL,NULL,NULL,51,NULL,NULL),
 (728,358,'Rodrigo','Villota','1004550230',NULL,NULL,NULL,'1',NULL,NULL,NULL,49,NULL,NULL),
 (729,359,'Jose','Carlos','1752536860',NULL,NULL,NULL,'1',NULL,NULL,NULL,48,NULL,NULL),
 (730,360,'Anita','Chuquin','1002000642',NULL,NULL,NULL,'1',NULL,NULL,NULL,54,NULL,NULL),
 (731,361,'Maria','Elena','1002260535',NULL,NULL,NULL,'1',NULL,NULL,NULL,53,NULL,NULL),
 (732,362,'Lorena','Gudinio','1004550206',NULL,NULL,NULL,'1',NULL,NULL,NULL,59,NULL,NULL),
 (733,363,'Mirian','Erazo','1004733992',NULL,NULL,NULL,'1',NULL,NULL,NULL,58,NULL,NULL),
 (734,364,'Angeles','Campoverde','5000629161',NULL,NULL,NULL,'1',NULL,NULL,NULL,57,NULL,NULL),
 (735,365,'Oscar','Pozo','1004453740',NULL,NULL,NULL,'1',NULL,NULL,NULL,56,NULL,NULL),
 (736,366,'ep','ep',NULL,NULL,NULL,NULL,'1',NULL,NULL,NULL,63,NULL,NULL),
 (737,367,'Nancy','Orbe','1004524052',NULL,NULL,NULL,'1',NULL,NULL,NULL,62,NULL,NULL),
 (738,368,'Ximena','Gudinio','1003463351',NULL,NULL,NULL,'1',NULL,NULL,NULL,60,NULL,NULL),
 (739,369,'Lucila','Fernandez','1003965983',NULL,NULL,NULL,'1',NULL,NULL,NULL,68,NULL,NULL),
 (740,370,'Renan','Guerron','1004549034',NULL,NULL,NULL,'1',NULL,NULL,NULL,70,NULL,NULL),
 (741,371,'Fernando','Portilla','401605553',NULL,NULL,NULL,'1',NULL,NULL,NULL,71,NULL,NULL),
 (742,372,'Ernesto','Vaca','1004549273',NULL,NULL,NULL,'1',NULL,NULL,NULL,64,NULL,NULL),
 (743,373,'Miguel','Anrango','1004563217',NULL,NULL,NULL,'1',NULL,NULL,NULL,65,NULL,NULL),
 (744,374,'Fernando','Bolanios','1003960042',NULL,NULL,NULL,'1',NULL,NULL,NULL,66,NULL,NULL),
 (745,375,'Miguel','Chavez','1003999610',NULL,NULL,NULL,'1',NULL,NULL,NULL,67,NULL,NULL),
 (746,376,'Alicia','Guevara','1003826003',NULL,NULL,NULL,'1',NULL,NULL,NULL,76,NULL,NULL),
 (747,377,'Carmen','Mendoza','1002673570',NULL,NULL,NULL,'1',NULL,NULL,NULL,77,NULL,NULL),
 (748,378,'Margarita','Paez','1002311361',NULL,NULL,NULL,'1',NULL,NULL,NULL,79,NULL,NULL),
 (749,379,'Ximena','Ayala','1003564505',NULL,NULL,NULL,'1',NULL,NULL,NULL,73,NULL,NULL),
 (750,380,'Maribel','Juma','1722631411',NULL,NULL,NULL,'1',NULL,NULL,NULL,74,NULL,NULL),
 (751,381,'Marco','Chagna','1004719611',NULL,NULL,NULL,'1',NULL,NULL,NULL,75,NULL,NULL),
 (752,382,'Marco','Manrique','1004757454',NULL,NULL,NULL,'1',NULL,NULL,NULL,87,NULL,NULL),
 (753,383,'Anabel','Juma','1722631403',NULL,NULL,NULL,'1',NULL,NULL,NULL,86,NULL,NULL),
 (754,384,'William','Hurtado','1003071030',NULL,NULL,NULL,'1',NULL,NULL,NULL,80,NULL,NULL),
 (755,385,'Cindy','Hernandez','1004120224',NULL,NULL,NULL,'1',NULL,NULL,NULL,82,NULL,NULL),
 (756,386,'Leonel','Ruales','1003391370',NULL,NULL,NULL,'1',NULL,NULL,NULL,93,NULL,NULL),
 (757,387,'Diana','Galarza','1002869830',NULL,NULL,NULL,'1',NULL,NULL,NULL,95,NULL,NULL),
 (758,388,'Cecilia','Quinteros','1003500749',NULL,NULL,NULL,'1',NULL,NULL,NULL,94,NULL,NULL),
 (759,389,'Paul','Teran','1003225297',NULL,NULL,NULL,'1',NULL,NULL,NULL,91,NULL,NULL),
 (760,390,'Laura','Revelo','1004351027',NULL,NULL,NULL,'1',NULL,NULL,NULL,103,NULL,NULL),
 (761,391,'Christian','Rosado','1003984083',NULL,NULL,NULL,'1',NULL,NULL,NULL,101,NULL,NULL),
 (762,392,'Alan','Torres','1004149819',NULL,NULL,NULL,'0',NULL,NULL,NULL,99,NULL,NULL),
 (763,393,'Mijael','Flores','1004368436',NULL,NULL,NULL,'1',NULL,NULL,NULL,110,NULL,NULL),
 (764,394,'Daniel','Torres','1003123500',NULL,NULL,NULL,'1',NULL,NULL,NULL,111,NULL,NULL),
 (765,395,'Diana','Carrillo','1003149299',NULL,NULL,NULL,'1',NULL,NULL,NULL,108,NULL,NULL),
 (766,396,'Hely','Rueda','1004656201',NULL,NULL,NULL,'1',NULL,NULL,NULL,109,NULL,NULL),
 (767,397,'Cristian','Caranqui','1004694566',NULL,NULL,NULL,'1',NULL,NULL,NULL,106,NULL,NULL),
 (768,398,'Carmen','Revelo','1709536260',NULL,NULL,NULL,'1',NULL,NULL,NULL,105,NULL,NULL),
 (769,399,'Juan','Proano','1002543013',NULL,NULL,NULL,'1',NULL,NULL,NULL,119,NULL,NULL),
 (770,400,'Bladimir','Navarrete','1003190970',NULL,NULL,NULL,'1',NULL,NULL,NULL,118,NULL,NULL),
 (771,401,'Alvaro','Viteri','1003400395',NULL,NULL,NULL,'1',NULL,NULL,NULL,117,NULL,NULL),
 (772,402,'Viviana','Puga','1004433486',NULL,NULL,NULL,'1',NULL,NULL,NULL,116,NULL,NULL),
 (773,403,'Alejandra','Gonzales','1003498860',NULL,NULL,NULL,'1',NULL,NULL,NULL,115,NULL,NULL),
 (774,404,'Anita','Rojas','104402599',NULL,NULL,NULL,'1',NULL,NULL,NULL,114,NULL,NULL),
 (775,405,'Laura','Medrano','1001907623',NULL,NULL,NULL,'1',NULL,NULL,NULL,113,NULL,NULL),
 (776,406,'Angel','Suqui','1900443969',NULL,NULL,NULL,'1',NULL,NULL,NULL,112,NULL,NULL),
 (777,407,'Cristian','Gaibor','201495769',NULL,NULL,NULL,'1',NULL,NULL,NULL,126,NULL,NULL),
 (778,408,'Juan','Carlos','1002001574',NULL,NULL,NULL,'1',NULL,NULL,NULL,125,NULL,NULL),
 (779,409,'Orlando','Sarauz','1002341871',NULL,NULL,NULL,'1',NULL,NULL,NULL,124,NULL,NULL),
 (780,410,'Gabriela','Vasquez','1003267844',NULL,NULL,NULL,'1',NULL,NULL,NULL,123,NULL,NULL),
 (781,411,'Francisco','Farinango','1715955967',NULL,NULL,NULL,'1',NULL,NULL,NULL,122,NULL,NULL),
 (782,412,'Jenny','Navarrete','1003725114',NULL,NULL,NULL,'1',NULL,NULL,NULL,121,NULL,NULL),
 (783,413,'Franklin','Chavez','1002996443',NULL,NULL,NULL,'1',NULL,NULL,NULL,120,NULL,NULL),
 (791,420,'Aldair','Robles','1004696470','M',20,'arobles@gmail.com','1',NULL,'062612013','0990441213',NULL,'1004696470.jpg',NULL),
 (792,414,'Alex','Salazar','1002556437','M',30,'asalazar@gmail.com','1',NULL,'6212013','0991505871',190,'1002556437.jpg',NULL),
 (794,424,'Maria','Salazar','1002223335','F',20,'msalazar@gmail.com','1',NULL,'062612013','0991505871',NULL,'1002223335.',NULL),
 (795,425,'Susana','Montenegro','1003001383','F',31,'smontenegro@gmail.com','1',NULL,'2612013','0993441212',191,'1003001383.',NULL),
 (799,426,'Jose','Salazar','1001001005','M',30,'jsalazar@gmail.com','1',NULL,'062612013','0991505871',192,'1001001005.',NULL);
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;


--
-- Definition of table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE `empleados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `apellido` varchar(100) DEFAULT NULL,
  `categoria` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empleados`
--

/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` (`id`,`apellido`,`categoria`) VALUES 
 (1,'Gonzalez',1),
 (2,'Pereyra',5),
 (3,'Gutierrez',4),
 (4,'Santo',2),
 (5,'Liberti',5),
 (6,'Perez',5),
 (7,'Rivarola',5),
 (8,'Andrade',3),
 (9,'Lucca',5),
 (10,'Silva',5),
 (11,'Zambani',5),
 (12,'Dibari',4),
 (13,'Delucia',5),
 (14,'Franco',NULL);
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;


--
-- Definition of table `estudiante`
--

DROP TABLE IF EXISTS `estudiante`;
CREATE TABLE `estudiante` (
  `codigoestudiante` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cedula` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  PRIMARY KEY (`codigoestudiante`) USING BTREE,
  UNIQUE KEY `uc_estudiante` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `estudiante`
--

/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
INSERT INTO `estudiante` (`codigoestudiante`,`cedula`,`nombre`,`apellido`,`estado`) VALUES 
 (1,'1004082507','Elizabeth','Diaz','1'),
 (2,'1002078952','Nelly','Beltran','1'),
 (3,'1005246861','Luis','Beltran','1'),
 (4,'1004198774','Richard','Encalada','1'),
 (5,'1001663754','Amparo','Carbali','1'),
 (6,'1001705688','Sonia','Castro','1'),
 (7,'1002271441','Carolina','Flores','1'),
 (8,'1004093397','Mireya','Cerpa','1'),
 (9,'1003866330','Fernanda','Ramos','1'),
 (10,'1002450946','Marina','Bastidas','1'),
 (11,'1001294212','Ricardo','Chiriboga','1'),
 (12,'1001404563','Telmo','Estevez','1'),
 (13,'1001859840','Elena','Maria','1'),
 (14,'1001532991','Marlene','Gomez','1'),
 (15,'1001405040','Vinicio','Garcia','1'),
 (16,'1002072849','Sonia','Guerra','1'),
 (17,'1004766448','Ronald','Hidrobo','1'),
 (18,'1002564431','Magaly','Rosero','1'),
 (19,'1050411139','Marco','Jaramillo','1'),
 (20,'1004572317','Fabian','Macias','1'),
 (21,'1001665155','Margarita','Cevallos','1'),
 (22,'1003412044','Cosme','Mejia','1'),
 (23,'1003995550','Edgar','Naranjo','1'),
 (24,'1001712544','Miriam','Munioz','1'),
 (25,'1001862893','Rosa','Ortega','1'),
 (26,'1004267363','Jessica','Freire','1'),
 (27,'1001358835','Juan','Perez','1'),
 (28,'1001842739','Estefano','Palacios','1'),
 (29,'400685160','Marco','Perez','1'),
 (30,'1102020474','Cumanda','Regalado','1'),
 (31,'1721059150','FranKlin','Valenzuela','1'),
 (32,'400763298','Wilson','Pozo','1'),
 (33,'1001483161','Rosario','Quito','1'),
 (34,'401037502','Sara','Rosero','1'),
 (35,'1003977996','Janeth','Sandoval','1'),
 (36,'1002302345','Fany','Rivera','1'),
 (37,'1003001375','Cristina','Montenegro','1'),
 (38,'1004549307','Maria','Toasa','1'),
 (39,'1722495965','Inazio','Arrieta','1'),
 (40,'1005249642','Washington','Suasti','1'),
 (41,'1001758315','Hugo','Teran','1'),
 (42,'1001512480','Zulema','Yepez','1'),
 (43,'1004550230','Rodrigo','Villota','1'),
 (44,'1752536860','Jose','Carlos','1'),
 (45,'1002000642','Anita','Chuquin','1'),
 (46,'1002260535','Maria','Elena','1'),
 (47,'1004550206','Lorena','Gudinio','1'),
 (48,'1004733992','Mirian','Erazo','1'),
 (49,'5000629161','Angeles','Campoverde','1'),
 (50,'1004453740','Oscar','Pozo','1'),
 (51,'1004524052','Nancy','Orbe','1'),
 (52,'1003463351','Ximena','Gudinio','1'),
 (53,'1003965983','Lucila','Fernandez','1'),
 (54,'1004549034','Renan','Guerron','1'),
 (55,'401605553','Fernando','Portilla','1'),
 (56,'1004549273','Ernesto','Vaca','1'),
 (57,'1004563217','Miguel','Anrango','1'),
 (58,'1003960042','Fernando','Bolanios','1'),
 (59,'1003999610','Miguel','Chavez','1'),
 (60,'1003826003','Alicia','Guevara','1'),
 (61,'1002673570','Carmen','Mendoza','1'),
 (62,'1002311361','Margarita','Paez','1'),
 (63,'1003564505','Ximena','Ayala','1'),
 (64,'1722631411','Maribel','Juma','1'),
 (65,'1004719611','Marco','Chagna','1'),
 (66,'1004757454','Marco','Manrique','1'),
 (67,'1722631403','Anabel','Juma','1'),
 (68,'1003071030','William','Hurtado','1'),
 (69,'1004120224','Cindy','Hernandez','1'),
 (70,'1003391370','Leonel','Ruales','1'),
 (71,'1002869830','Diana','Galarza','1'),
 (72,'1003500749','Cecilia','Quinteros','1'),
 (73,'1003225297','Paul','Teran','1'),
 (74,'1004351027','Laura','Revelo','1'),
 (75,'1003984083','Christian','Rosado','1'),
 (76,'1004149819','Alan','Torres','1'),
 (77,'1004368436','Mijael','Flores','1'),
 (78,'1003123500','Daniel','Torres','1'),
 (79,'1003149299','Diana','Carrillo','1'),
 (80,'1004656201','Hely','Rueda','1'),
 (81,'1004694566','Cristian','Caranqui','1'),
 (82,'1709536260','Carmen','Revelo','1'),
 (83,'1002543013','Juan','Proano','1'),
 (84,'1003190970','Bladimir','Navarrete','1'),
 (85,'1003400395','Alvaro','Viteri','1'),
 (86,'1004433486','Viviana','Puga','1'),
 (87,'1003498860','Alejandra','Gonzales','1'),
 (88,'104402599','Anita','Rojas','1'),
 (89,'1001907623','Laura','Medrano','1'),
 (90,'1900443969','Angel','Suqui','1'),
 (91,'201495769','Cristian','Gaibor','1'),
 (92,'1002001574','Juan','Carlos','1'),
 (93,'1002341871','Orlando','Sarauz','1'),
 (94,'1003267844','Gabriela','Vasquez','1'),
 (95,'1715955967','Francisco','Farinango','1'),
 (96,'1003725114','Jenny','Navarrete','1'),
 (97,'1002996443','Franklin','Chavez','1'),
 (98,'1004696470','Aldair','Robles','1'),
 (99,'1002556437','Alex','Salazar','1'),
 (100,'1002223335','Maria','Salazar','1'),
 (101,'1003001383','Susana','Montenegro','1'),
 (102,'1001001005','Jose','Salazar','1');
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;


--
-- Definition of table `materia`
--

DROP TABLE IF EXISTS `materia`;
CREATE TABLE `materia` (
  `codigomateria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `codigoreferencia` varchar(10) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`codigomateria`),
  UNIQUE KEY `uc_materia` (`codigoreferencia`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `materia`
--

/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
INSERT INTO `materia` (`codigomateria`,`nombre`,`descripcion`,`codigoreferencia`,`estado`) VALUES 
 (1,'Matematicas','Matematicas','MAT','1'),
 (3,'Geometria','Geometria','GEO','1');
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;


--
-- Definition of table `notaparcial`
--

DROP TABLE IF EXISTS `notaparcial`;
CREATE TABLE `notaparcial` (
  `codigonotaparcial` int(11) NOT NULL AUTO_INCREMENT,
  `codigocurso` int(11) DEFAULT NULL,
  `codigoestudiante` int(11) DEFAULT NULL,
  `codigotipoparcial` int(11) DEFAULT NULL,
  `valor` int(11) DEFAULT NULL,
  PRIMARY KEY (`codigonotaparcial`),
  UNIQUE KEY `uc_notaparcial` (`codigocurso`,`codigoestudiante`,`codigotipoparcial`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notaparcial`
--

/*!40000 ALTER TABLE `notaparcial` DISABLE KEYS */;
INSERT INTO `notaparcial` (`codigonotaparcial`,`codigocurso`,`codigoestudiante`,`codigotipoparcial`,`valor`) VALUES 
 (19,1,1,1,9),
 (21,1,1,5,9),
 (23,1,1,3,10);
/*!40000 ALTER TABLE `notaparcial` ENABLE KEYS */;


--
-- Definition of table `opcion`
--

DROP TABLE IF EXISTS `opcion`;
CREATE TABLE `opcion` (
  `codigoopcion` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` varchar(45) NOT NULL,
  `url` varchar(100) DEFAULT NULL,
  `referencia` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`codigoopcion`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `opcion`
--

/*!40000 ALTER TABLE `opcion` DISABLE KEYS */;
INSERT INTO `opcion` (`codigoopcion`,`nombre`,`descripcion`,`estado`,`url`,`referencia`) VALUES 
 (1,'Seguridades','Administracion de seguridades.','1','','adm_seg'),
 (2,'Permisos','Administracion de permisos.','1','','adm_tab_per'),
 (3,'Registro de asistencias','Administracion de asistencias','1','','adm_asi'),
 (4,'Empleados','Administracion de empleados','1',NULL,'adm_emp'),
 (5,'Vacaciones','Adminstracion de vacaciones','1','','adm_tab_vac'),
 (6,'Solicitar permiso','Solicitar permiso.','1','','sol_per'),
 (7,'Administrar permisos','Administrar permisos','1','','adm_per'),
 (8,'Solicitar vacaciones','Solicitar vacaciones','1',NULL,'sol_vac'),
 (9,'Administrar contratos','Administrar contratos','1',NULL,'adm_con'),
 (10,'Administrar vacaciones','Administrar vacaciones','1','','adm_vac'),
 (11,'Horas extras','Horas extras','1','','adm_hor_ext');
/*!40000 ALTER TABLE `opcion` ENABLE KEYS */;


--
-- Definition of table `paralelo`
--

DROP TABLE IF EXISTS `paralelo`;
CREATE TABLE `paralelo` (
  `codigoparalelo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `codigoreferencia` varchar(10) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`codigoparalelo`),
  UNIQUE KEY `uc_paralelo` (`codigoreferencia`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paralelo`
--

/*!40000 ALTER TABLE `paralelo` DISABLE KEYS */;
INSERT INTO `paralelo` (`codigoparalelo`,`nombre`,`descripcion`,`codigoreferencia`,`estado`) VALUES 
 (1,'A','Paralelo A','A','1'),
 (2,'B','Paralelo B','B','1'),
 (3,'C','Paralelo C','C','1');
/*!40000 ALTER TABLE `paralelo` ENABLE KEYS */;


--
-- Definition of table `parametros`
--

DROP TABLE IF EXISTS `parametros`;
CREATE TABLE `parametros` (
  `codigoparametro` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `codigoreferencia` varchar(45) NOT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `valor` varchar(45) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `justificacion` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`codigoparametro`),
  UNIQUE KEY `UC_PARAMETROS` (`codigoreferencia`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parametros`
--

/*!40000 ALTER TABLE `parametros` DISABLE KEYS */;
INSERT INTO `parametros` (`codigoparametro`,`codigoreferencia`,`nombre`,`valor`,`estado`,`justificacion`) VALUES 
 (1,'MINUTOS_HORA_ACADEMICA','Minutos de una hora academica','60','1',NULL),
 (2,'MINUTOS_HORA_ADMINISTRATIVA','Minutos de una hora administrativa','60','1',NULL),
 (3,'TIPO_ACTUALIZACION_DATA_ASISTENCIA','Tipo actualizacion de la data de la asistencia','TOD','1','Los valores pueden ser DIA SEM MES TOD'),
 (5,'ARCHIVO_DATA_ASISTENCIA','Nombre del archivo de la data de la asistencia','asistencia21-11-2014.csv','1',NULL),
 (7,'SERVIDOR_FTP','Direccion IP del servidor FTP','127.0.0.1','1',NULL),
 (8,'USUARIO_FTP','Usuario FTP','admin','1',NULL),
 (9,'PASSWORD_FTP','Password FTP','admin','1',NULL),
 (10,'DIAS_VACACIONES_ANIO','Dias de vacaciones al anio','15','1',NULL);
/*!40000 ALTER TABLE `parametros` ENABLE KEYS */;


--
-- Definition of table `parcial`
--

DROP TABLE IF EXISTS `parcial`;
CREATE TABLE `parcial` (
  `codigoparcial` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `codigoreferencia` varchar(10) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `tipocomponente` varchar(100) DEFAULT NULL,
  `titleid` varchar(50) DEFAULT NULL,
  `orden` int(11) DEFAULT NULL,
  PRIMARY KEY (`codigoparcial`),
  UNIQUE KEY `uc_parcial` (`codigoreferencia`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parcial`
--

/*!40000 ALTER TABLE `parcial` DISABLE KEYS */;
INSERT INTO `parcial` (`codigoparcial`,`nombre`,`descripcion`,`codigoreferencia`,`estado`,`tipocomponente`,`titleid`,`orden`) VALUES 
 (1,'Primera','Primera parcial','P1','1','LoginAppDemo.view.notas.NotaParcial','titleNotaParcialTB',1),
 (2,'Segunda','Segunda parcial','P2','1','LoginAppDemo.view.notas.NotaParcial','titleNotaParcialTB',2),
 (3,'Tercera','Tercera parcial','P3','1','LoginAppDemo.view.notas.NotaParcial','titleNotaParcialTB',3),
 (4,'Examen','Examen','EXA','1','LoginAppDemo.view.notas.ExamenQuimestreView','titleExamenQuimestreTB',4);
/*!40000 ALTER TABLE `parcial` ENABLE KEYS */;


--
-- Definition of table `parcialtipoparcial`
--

DROP TABLE IF EXISTS `parcialtipoparcial`;
CREATE TABLE `parcialtipoparcial` (
  `codigoparcial` int(11) NOT NULL DEFAULT '0',
  `codigotipoparcial` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`codigoparcial`,`codigotipoparcial`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parcialtipoparcial`
--

/*!40000 ALTER TABLE `parcialtipoparcial` DISABLE KEYS */;
/*!40000 ALTER TABLE `parcialtipoparcial` ENABLE KEYS */;


--
-- Definition of table `periodo`
--

DROP TABLE IF EXISTS `periodo`;
CREATE TABLE `periodo` (
  `codigoperiodo` int(11) NOT NULL AUTO_INCREMENT,
  `codigodominio` int(11) DEFAULT NULL,
  `fechainicio` datetime DEFAULT NULL,
  `fechafin` datetime DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `estadoperiodo` varchar(20) DEFAULT NULL,
  `anio` int(11) DEFAULT NULL,
  PRIMARY KEY (`codigoperiodo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `periodo`
--

/*!40000 ALTER TABLE `periodo` DISABLE KEYS */;
INSERT INTO `periodo` (`codigoperiodo`,`codigodominio`,`fechainicio`,`fechafin`,`estado`,`estadoperiodo`,`anio`) VALUES 
 (1,7,'2015-01-01 00:00:00','2015-06-01 00:00:00','1','ABIERTO',2015);
/*!40000 ALTER TABLE `periodo` ENABLE KEYS */;


--
-- Definition of table `periodoacademico`
--

DROP TABLE IF EXISTS `periodoacademico`;
CREATE TABLE `periodoacademico` (
  `codigoperiodoacademico` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`codigoperiodoacademico`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `periodoacademico`
--

/*!40000 ALTER TABLE `periodoacademico` DISABLE KEYS */;
INSERT INTO `periodoacademico` (`codigoperiodoacademico`,`descripcion`) VALUES 
 (1,'Periodo academico 1');
/*!40000 ALTER TABLE `periodoacademico` ENABLE KEYS */;


--
-- Definition of table `periodotiponota`
--

DROP TABLE IF EXISTS `periodotiponota`;
CREATE TABLE `periodotiponota` (
  `codigoperiodotiponota` int(11) NOT NULL AUTO_INCREMENT,
  `codigoperiodo` int(11) DEFAULT NULL,
  `codigotiponota` int(11) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`codigoperiodotiponota`),
  UNIQUE KEY `uc_periodotiponota` (`codigoperiodo`,`codigotiponota`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `periodotiponota`
--

/*!40000 ALTER TABLE `periodotiponota` DISABLE KEYS */;
/*!40000 ALTER TABLE `periodotiponota` ENABLE KEYS */;


--
-- Definition of table `rol`
--

DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol` (
  `codigorol` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `estado` varchar(1) NOT NULL,
  PRIMARY KEY (`codigorol`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rol`
--

/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` (`codigorol`,`nombre`,`descripcion`,`estado`) VALUES 
 (1,'Administrador','Administrador','1'),
 (2,'Docente','Docente','1'),
 (3,'Administrador RRHH','Administrador RRHH','1'),
 (6,'Asistente de RRHH','Asistente de RRHH','1'),
 (7,'Administrativo','Administrativo','1');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;


--
-- Definition of table `rol_opcion`
--

DROP TABLE IF EXISTS `rol_opcion`;
CREATE TABLE `rol_opcion` (
  `codigorol` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `codigoopcion` int(10) unsigned NOT NULL,
  `estado` varchar(1) NOT NULL,
  PRIMARY KEY (`codigorol`,`codigoopcion`),
  KEY `FK_rol_opcion_opcion` (`codigoopcion`),
  CONSTRAINT `FK_rol_opcion_opcion` FOREIGN KEY (`codigoopcion`) REFERENCES `opcion` (`codigoopcion`),
  CONSTRAINT `fk_rol_opcion_rol` FOREIGN KEY (`codigorol`) REFERENCES `rol` (`codigorol`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rol_opcion`
--

/*!40000 ALTER TABLE `rol_opcion` DISABLE KEYS */;
INSERT INTO `rol_opcion` (`codigorol`,`codigoopcion`,`estado`) VALUES 
 (1,1,'1'),
 (1,2,'1'),
 (1,3,'1'),
 (1,4,'1'),
 (1,5,'1'),
 (1,6,'1'),
 (1,7,'1'),
 (1,8,'1'),
 (1,9,'1'),
 (1,10,'1'),
 (1,11,'1'),
 (2,2,'1'),
 (2,5,'1'),
 (2,6,'1'),
 (2,8,'1'),
 (6,1,'1'),
 (6,2,'1'),
 (6,3,'1'),
 (7,2,'1'),
 (7,5,'1'),
 (7,6,'1'),
 (7,8,'1'),
 (7,9,'1');
/*!40000 ALTER TABLE `rol_opcion` ENABLE KEYS */;


--
-- Definition of table `tipocurso`
--

DROP TABLE IF EXISTS `tipocurso`;
CREATE TABLE `tipocurso` (
  `codigotipocurso` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `codigoreferencia` varchar(10) DEFAULT NULL,
  `codigonumerico` varchar(10) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`codigotipocurso`),
  UNIQUE KEY `uc_tipocurso` (`codigoreferencia`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tipocurso`
--

/*!40000 ALTER TABLE `tipocurso` DISABLE KEYS */;
INSERT INTO `tipocurso` (`codigotipocurso`,`nombre`,`codigoreferencia`,`codigonumerico`,`estado`) VALUES 
 (1,'Primero','PRIMERO','1','1'),
 (3,'Segundo','SEGUNDO','2','1'),
 (4,'Tercero','TERCERO','3','1'),
 (5,'Cuarto','CUARTO','4','1'),
 (6,'Quinto','QUINTO','5','1'),
 (7,'Sexto','SEXTO','6','1'),
 (8,'Septimo','SEPTIMO','7','1'),
 (9,'Noveno','NOVENO','9','1'),
 (10,'Decimo','DECIMO','10','1'),
 (11,'Octavo','OCTAVO','8','1');
/*!40000 ALTER TABLE `tipocurso` ENABLE KEYS */;


--
-- Definition of table `tiponota`
--

DROP TABLE IF EXISTS `tiponota`;
CREATE TABLE `tiponota` (
  `codigotiponota` int(11) NOT NULL AUTO_INCREMENT,
  `codigotiponotapadre` int(11) DEFAULT NULL,
  `codigoperiodo` int(11) DEFAULT NULL,
  `codigodominio` int(11) DEFAULT NULL,
  `codigoreferencia` varchar(20) DEFAULT NULL,
  `orden` int(11) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`codigotiponota`) USING BTREE,
  KEY `fk_periodo` (`codigoperiodo`),
  KEY `fk_dominio` (`codigodominio`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tiponota`
--

/*!40000 ALTER TABLE `tiponota` DISABLE KEYS */;
INSERT INTO `tiponota` (`codigotiponota`,`codigotiponotapadre`,`codigoperiodo`,`codigodominio`,`codigoreferencia`,`orden`,`estado`,`descripcion`) VALUES 
 (1,NULL,1,15,NULL,1,'1','Quimestre 1'),
 (2,NULL,1,15,NULL,2,'1','Quimestre 2'),
 (3,NULL,1,3,NULL,3,'1','Recuperacion'),
 (4,NULL,1,4,NULL,4,'1','Supletorio'),
 (5,NULL,1,5,NULL,5,'1','Remedial'),
 (6,1,1,10,NULL,1,'1','PARCIAL 1'),
 (7,1,1,10,NULL,2,'1','PARCIAL 2'),
 (8,1,1,10,NULL,3,'1','PARCIAL 3'),
 (9,1,1,13,NULL,4,'1','EXAMEN'),
 (10,2,1,10,NULL,1,'1','PARCIAL 1'),
 (11,2,1,10,NULL,2,'1','PARCIAL 2'),
 (12,2,1,10,NULL,3,'1','PARCIAL 3'),
 (13,2,1,13,NULL,4,'1','EXAMEN Q1'),
 (14,3,1,16,NULL,1,'1','Recuperacion Q1'),
 (15,3,1,17,NULL,2,'1','Recuperacion Q2'),
 (16,6,1,18,NULL,1,'1','TRABAJO ACADEMICO INDEPENDIENTE (TAREAS)'),
 (17,6,1,19,NULL,2,'1','ACTIVIDADES INDIVIDUALES EN CLASE'),
 (18,6,1,20,NULL,3,'1','ACTIVIDADES GRUPALES EN CLASE'),
 (19,6,1,21,NULL,4,'1','LECCIONES'),
 (20,6,1,22,NULL,5,'1','EXAMEN Q2');
/*!40000 ALTER TABLE `tiponota` ENABLE KEYS */;


--
-- Definition of table `tiponotaparcial`
--

DROP TABLE IF EXISTS `tiponotaparcial`;
CREATE TABLE `tiponotaparcial` (
  `codigotiponota` int(11) NOT NULL DEFAULT '0',
  `codigoparcial` int(11) NOT NULL DEFAULT '0',
  `codigotiponotaparcial` int(11) DEFAULT NULL,
  `valornota` int(11) DEFAULT NULL,
  PRIMARY KEY (`codigotiponota`,`codigoparcial`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tiponotaparcial`
--

/*!40000 ALTER TABLE `tiponotaparcial` DISABLE KEYS */;
INSERT INTO `tiponotaparcial` (`codigotiponota`,`codigoparcial`,`codigotiponotaparcial`,`valornota`) VALUES 
 (1,1,1,NULL),
 (1,2,2,NULL),
 (1,3,3,NULL),
 (1,4,4,NULL);
/*!40000 ALTER TABLE `tiponotaparcial` ENABLE KEYS */;


--
-- Definition of table `tipoparcial`
--

DROP TABLE IF EXISTS `tipoparcial`;
CREATE TABLE `tipoparcial` (
  `codigotipoparcial` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `codigoreferencia` varchar(10) DEFAULT NULL,
  `estado` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`codigotipoparcial`),
  UNIQUE KEY `uc_tipoparcial` (`codigotipoparcial`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tipoparcial`
--

/*!40000 ALTER TABLE `tipoparcial` DISABLE KEYS */;
INSERT INTO `tipoparcial` (`codigotipoparcial`,`nombre`,`descripcion`,`codigoreferencia`,`estado`) VALUES 
 (1,'Tareas','Tareas','TAR','1'),
 (2,'Actuacion clase individual','Actuacion clase individual','ACI','1'),
 (3,'Actuacion clase grupal','Actuacion clase grupal','ACG','1'),
 (4,'Lecciones','Lecciones','LEC','1'),
 (5,'Pruebas','Pruebas','PRU','1');
/*!40000 ALTER TABLE `tipoparcial` ENABLE KEYS */;


--
-- Definition of table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `codigousuario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `estado` varchar(1) NOT NULL,
  `clave` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`codigousuario`)
) ENGINE=InnoDB AUTO_INCREMENT=427 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario`
--

/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`codigousuario`,`username`,`estado`,`clave`) VALUES 
 (316,'ediaz','1','cb64f7622fdc328179d69648a7ec5ff7'),
 (317,'nbeltran','1','5e48a88c58f04cab97345d718bc8d534'),
 (318,'lbeltran','1','5ffc3f3eb3cfce4165745c1957ae07f5'),
 (319,'rencalada','1','e9d5b3c5bccf84344da98d064a65115b'),
 (320,'acarbali','1','a1eef8a7fbdb3481b28ea60c722a7ec4'),
 (321,'scastro','1','fb73102299248780d87f1075c16e513e'),
 (322,'cflores','1','6a702157b910a9d11874a584fd8e5fe2'),
 (323,'mcerpa','1','eeec670cd3f6668e184dc9b060839797'),
 (324,'framos','1','688d2752cc129e27d97e545d27e21832'),
 (325,'mbastidas','1','08ef489953cf381c9a2bd5d0f62b77c3'),
 (326,'rchiriboga','1','0eb61e7935cd441fa7a0b6e93be34048'),
 (327,'testevez','1','cf1f75bfdf3372d028ee23c7447b10cf'),
 (328,'emaria','1','e8d17064b1d8f9b41ea89659625b6f6b'),
 (329,'mgomez','1','f5ddb541cd46d6f5606e830a3e4d3c60'),
 (330,'vgarcia','1','d7a4e82662a9b1a96cc4dd59a3da3b9f'),
 (331,'sguerra','1','aa517e08e17a1e4dcd7ac8573d911896'),
 (332,'rhidrobo','1','6b739e171508e302d929fd9f10f5088f'),
 (333,'mrosero','1','cda78110fb2ff9f64acc061c192d6143'),
 (334,'mjaramillo','1','49f292f0a7961ee6b56cb083279783ec'),
 (335,'fmacias','1','678e0a55e8b347cfa1fc9f7a569b5027'),
 (336,'mcevallos','1','7d22495ea9ea2526c3e144330cb7e3ca'),
 (337,'cmejia','1','2f31341561a9609a8e296f51ba29209a'),
 (338,'enaranjo','1','b94fbbce3283caf1b423548f69eead00'),
 (339,'mmunioz','1','0623d14b61b6d4963bfe0104b644629c'),
 (340,'rortega','1','5329ac3a2611313ae074f96631692120'),
 (341,'jfreire','1','207e68d247ac8fefb022a0f93aba863b'),
 (342,'jperez','1','ebde0645e6d2a650fb009be4dae6694e'),
 (343,'epalacios','1','8be602b68a6c6f0fcfa4a07586f14e29'),
 (344,'mperez','1','b97d1e22357f78dcf2657968adc7a009'),
 (345,'cregalado','1','9740e7ea9f8891038cea6c775963d25a'),
 (346,'fvalenzuela','1','ae697757aa06099dc6b605372b705b0a'),
 (347,'wpozo','1','8a9a7fe4846e540d667d752214466a98'),
 (348,'rquito','1','72a5cd25e8f6244f2749d78c92d92be8'),
 (349,'srosero','1','93999eece25bc569bb0bb0c20ee3b040'),
 (350,'jsandoval','1','2f36f10470b1406195fe97cae881a42e'),
 (351,'frivera','1','90dd2c6c0d1715bbcaf0d93e29a827d1'),
 (352,'cmontenegro','1','a469d4fcf7871911442fa8269cde58e5'),
 (353,'mtoasa','1','c626e62a71a94d0ba4858402944d8ede'),
 (354,'iarrieta','1','30861571e3356b5e9c31b53e96da209e'),
 (355,'wsuasti','1','e9e84539ba22d09dca6e2b8c751faa2f'),
 (356,'hteran','1','4121ba0347d4bae7bec5bb50968940dc'),
 (357,'zyepez','1','d0753093e9325e6abb1045d284cb964f'),
 (358,'rvillota','1','479f8e4f3fa57e03c9bc203ffe98172c'),
 (359,'jcarlos','1','ced566012a49f76eb2a0f37074735024'),
 (360,'achuquin','1','ce2311791509b2614b0f4dd7738b482d'),
 (361,'melena','1','3d103582ba8abddb0e329ac514733a6b'),
 (362,'lgudinio','1','d1f3847523d889caba38966141900cd3'),
 (363,'merazo','1','5e1e0eb4c155c6cac3f95cb42c624840'),
 (364,'acampoverde','1','c6a6acf8014b67074d0dcd90bc38e554'),
 (365,'opozo','1','ef00a46350b0c8bd54677d378bff38ec'),
 (366,'eep','1','a6107c34959da76381fd9dbf03cfe749'),
 (367,'norbe','1','a7a833900948f6de6ddc6e3fd699e968'),
 (368,'xgudinio','1','206f8f4204a1f01a4dfdb784bc40c06a'),
 (369,'lfernandez','1','79239dfa99445c6a688537a78cbfbc27'),
 (370,'rguerron','1','7d9eef9eafa5a14ddb35c27dfb8c8868'),
 (371,'fportilla','1','2c6551a2a17d6bf6e3a5b8e11d212cdc'),
 (372,'evaca','1','f1dc5f415083e38cf4e4edeca072b355'),
 (373,'manrango','1','c2eeb4ea070410bc11e7c32004f00a84'),
 (374,'fbolanios','1','799ee25413ea03bda04613997218ab07'),
 (375,'mchavez','1','5568f3447c43e6bb6cc7e70cb0c6f888'),
 (376,'aguevara','1','5f5f7719d08658f7837c6ab3274d260c'),
 (377,'cmendoza','1','d4f8d4ad4a0ffec744032c1d45a8dfdb'),
 (378,'mpaez','1','4f344cfb52c56b85e54a7a8faabd79f9'),
 (379,'xayala','1','968f8410387a5ec1ecc5fbb2e495eb48'),
 (380,'mjuma','1','98ace4a0af8f0dd7f087331608717be4'),
 (381,'mchagna','1','1a2a295ed4c0d532b4cc518afb309ebf'),
 (382,'mmanrique','1','6c27252fad2b3bd8d608d07fddab1ed4'),
 (383,'ajuma','1','a5589f4937974da336301a80e868775e'),
 (384,'whurtado','1','b93d87b595e44467e68fff74445036ae'),
 (385,'chernandez','1','03bc9135a2836f8623f43a92ae4b95ff'),
 (386,'lruales','1','18fc1aa1caeccb02d8aab9ae1208b101'),
 (387,'dgalarza','1','add5d3ec2ff74e12bc52567791d13775'),
 (388,'cquinteros','1','bd5fe77249dc061132540c145fdbb2f8'),
 (389,'pteran','1','d8108e1ce3c4cb8db7a42eb538145d79'),
 (390,'lrevelo','1','a9dd3114b9620f7c2d88750f86e4e14b'),
 (391,'crosado','1','ac7014d158c58c33ac26e93343ce1b57'),
 (392,'atorres','1','e00cf25ad42683b3df678c61f42c6bda'),
 (393,'mflores','1','143d42165dfaa0e4870b787d8d0cb125'),
 (394,'dtorres','1','42c01782d971634b55870590bd6b8b29'),
 (395,'dcarrillo','1','23487b9d4ee7cf758115feef2c414af8'),
 (396,'hrueda','1','6e8da31a461a9c2a16e93d792f568e80'),
 (397,'ccaranqui','1','fb32dd8a3ad502db8da4cacaec058eed'),
 (398,'crevelo','1','f2aaef397614e97b1b0cb363e52b410b'),
 (399,'jproano','1','676fa53ac108c159fe4502d6bbb99860'),
 (400,'bnavarrete','1','c7154226ddffa1ea4c0de6a7b3ddb3c2'),
 (401,'aviteri','1','101d9e928de39066d0498fc709cdc8ad'),
 (402,'vpuga','1','3e3c4d0250da0681d07ad92f199bd054'),
 (403,'agonzales','1','c2e4e9fac478f3d475a7d39de7ba9aa6'),
 (404,'arojas','1','67c07188c7aac8f7c96f89ac572385cc'),
 (405,'lmedrano','1','5c86b966038a01ca262bd325e93caf5e'),
 (406,'asuqui','1','246d89e4824dacfcbde842c6917035d8'),
 (407,'cgaibor','1','cbcb3b7b8e8b007b4f3728922732c4e2'),
 (408,'jcarlos','1','ced566012a49f76eb2a0f37074735024'),
 (409,'osarauz','1','4a46d43480384fb50b90cc11c2945100'),
 (410,'gvasquez','1','44c98a05528a89954900b55fd8d0e959'),
 (411,'ffarinango','1','2209061442a389401928ad01d6f029a1'),
 (412,'jnavarrete','1','96c70e95e72f3fc2f264240acddabf0f'),
 (413,'fchavez','1','ded1ae2974b2b793f5d55a4f1664cca1'),
 (414,'admin','1','21232f297a57a5a743894a0e4a801fc3'),
 (416,'arcaiza','1','2c99621781696707d934d6cd2523b882'),
 (418,'','1','d41d8cd98f00b204e9800998ecf8427e'),
 (419,'','1','d41d8cd98f00b204e9800998ecf8427e'),
 (420,'arobles','1','b275c7dab492f48eb46e2c28c7a7c345'),
 (421,'acaiza','1','2dcf8c0bd229edd798c4db38d5a2f9c6'),
 (424,'msalazar','0','fd11febe9fdc34e8bc05f4f35e160286'),
 (425,'smontenegro','1','202cb962ac59075b964b07152d234b70'),
 (426,'jsalazar','1','f07671cac177870e31c90e85e274117d');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;


--
-- Definition of table `usuario_rol`
--

DROP TABLE IF EXISTS `usuario_rol`;
CREATE TABLE `usuario_rol` (
  `codigousuario` int(10) unsigned NOT NULL,
  `codigorol` int(10) unsigned NOT NULL,
  `estado` varchar(1) NOT NULL,
  PRIMARY KEY (`codigousuario`,`codigorol`),
  KEY `FK_usuario_rol_rol` (`codigorol`),
  CONSTRAINT `FK_usuario_rol_rol` FOREIGN KEY (`codigorol`) REFERENCES `rol` (`codigorol`),
  CONSTRAINT `FK_usuario_rol_usuario` FOREIGN KEY (`codigousuario`) REFERENCES `usuario` (`codigousuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario_rol`
--

/*!40000 ALTER TABLE `usuario_rol` DISABLE KEYS */;
INSERT INTO `usuario_rol` (`codigousuario`,`codigorol`,`estado`) VALUES 
 (316,2,'1'),
 (317,2,'1'),
 (318,2,'1'),
 (319,2,'1'),
 (320,2,'1'),
 (321,2,'1'),
 (322,2,'1'),
 (323,2,'1'),
 (324,2,'1'),
 (325,2,'1'),
 (326,2,'1'),
 (327,2,'1'),
 (328,2,'1'),
 (329,2,'1'),
 (330,2,'1'),
 (331,2,'1'),
 (332,2,'1'),
 (333,2,'1'),
 (334,2,'1'),
 (335,2,'1'),
 (336,2,'1'),
 (337,2,'1'),
 (338,2,'1'),
 (339,2,'1'),
 (340,2,'1'),
 (341,2,'1'),
 (342,2,'1'),
 (343,1,'1'),
 (343,2,'1'),
 (344,2,'1'),
 (345,2,'1'),
 (346,2,'1'),
 (347,2,'1'),
 (348,2,'1'),
 (349,2,'1'),
 (350,2,'1'),
 (351,2,'1'),
 (352,2,'1'),
 (353,2,'1'),
 (354,2,'1'),
 (355,2,'1'),
 (356,2,'1'),
 (357,2,'1'),
 (358,2,'1'),
 (359,2,'1'),
 (360,2,'1'),
 (361,2,'1'),
 (362,2,'1'),
 (363,2,'1'),
 (364,2,'1'),
 (365,2,'1'),
 (366,2,'1'),
 (367,2,'1'),
 (368,2,'1'),
 (369,2,'1'),
 (370,2,'1'),
 (371,2,'1'),
 (372,2,'1'),
 (373,2,'1'),
 (374,2,'1'),
 (375,2,'1'),
 (376,2,'1'),
 (377,2,'1'),
 (378,2,'1'),
 (379,2,'1'),
 (380,2,'1'),
 (381,2,'1'),
 (382,2,'1'),
 (383,2,'1'),
 (384,2,'1'),
 (385,2,'1'),
 (386,2,'1'),
 (387,2,'1'),
 (388,2,'1'),
 (389,2,'1'),
 (390,2,'1'),
 (391,2,'1'),
 (392,2,'1'),
 (393,2,'1'),
 (394,2,'1'),
 (395,2,'1'),
 (396,2,'1'),
 (397,2,'1'),
 (398,2,'1'),
 (399,2,'1'),
 (400,2,'1'),
 (401,2,'1'),
 (402,2,'1'),
 (403,2,'1'),
 (404,2,'1'),
 (405,2,'1'),
 (406,2,'1'),
 (407,2,'1'),
 (408,2,'1'),
 (409,2,'1'),
 (410,2,'1'),
 (411,2,'1'),
 (412,2,'1'),
 (413,2,'1'),
 (414,1,'1'),
 (420,2,'1'),
 (421,2,'1'),
 (425,2,'1');
/*!40000 ALTER TABLE `usuario_rol` ENABLE KEYS */;


--
-- Definition of view `v_estudiantes`
--

DROP TABLE IF EXISTS `v_estudiantes`;
DROP VIEW IF EXISTS `v_estudiantes`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_estudiantes` AS select `estudiante`.`codigoestudiante` AS `codigoestudiante`,`estudiante`.`cedula` AS `cedula`,`estudiante`.`nombre` AS `nombre`,`estudiante`.`apellido` AS `apellido` from `estudiante`;

--
-- Definition of view `v_parcial`
--

DROP TABLE IF EXISTS `v_parcial`;
DROP VIEW IF EXISTS `v_parcial`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_parcial` AS select `tipoparcial`.`codigotipoparcial` AS `codigotipoparcial`,`tipoparcial`.`nombre` AS `nombre`,`tipoparcial`.`descripcion` AS `descripcion`,`tipoparcial`.`codigoreferencia` AS `codigoreferencia` from `tipoparcial`;



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
