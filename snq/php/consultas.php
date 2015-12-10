<?php
include_once("conectar.php");

function consultarTipoNotaByParams($params) {
	
	if (is_null($params)) {
		return null;
	}
	
	$sql = "";
	$sql .= " SELECT ";
	$sql .= " tn.* ";
	$sql .= " FROM ";
	$sql .= " tiponota tn ";
	$sql .= " inner join dominio d on d.codigodominio = tn.codigodominio ";
	$sql .= " WHERE 1=1 ";

	$filtros = armarFiltrosTipoNota($params);
	
	$sql .= "".$filtros;
	
	//echo $sql;

	$tiponota = null;
	
	$rs = mysql_query($sql);
	
	while ($row = mysql_fetch_assoc($rs)) {
		$tiponota = $row;
	}
	
	return $tiponota;	
}

function contarTipoNotaByParams($params) {
	
	if (is_null($params)) {
		return -1;
	}
	
	$sql = "";
	$sql .= " SELECT ";
	$sql .= " COUNT(tn.codigotiponota) as count ";
	$sql .= " FROM ";
	$sql .= " tiponota tn ";
	$sql .= " inner join dominio d on d.codigodominio = tn.codigodominio ";
	$sql .= " WHERE 1=1 ";

	$filtros = armarFiltrosTipoNota($params);
	
	$sql .= "".$filtros;
	
	//echo $sql;
	
	$result=mysql_query($sql);
	
	$fila = mysql_fetch_assoc($result);
	$count = $fila['count'];
	
	//$rs = mysql_fetch_row($sql);
	//$row = mysql_fetch_row($rs);
	//$count = $row[0];
	
	return $count;
}

function armarFiltrosTipoNota($params) {
	$sql = "";
	
	if (!isset($params)) {
		return $sql;
	}
	
	if (isset($params->codigotiponota)) {
		$sql .= " and tn.codigotiponota = '".$params->codigotiponota."' ";
	}
	
	if (isset($params->codigotiponotapadre)) {
		$sql .= " and tn.codigotiponotapadre = '".$params->codigotiponotapadre."' ";
	}
	
	if (isset($params->columna)) {
		$sql .= " and d.columna = '".$params->columna."' ";
	}
	
	return $sql;
}

function consultarTipoNota($codigotiponota) {
	$sql = "";
	$sql .= " SELECT ";
	$sql .= " d.codigoreferencia as codigoreferenciadominio,  ";
	$sql .= " d.columna,  ";
	$sql .= " d.componente,  ";
	$sql .= " pc.*  ";
	$sql .= " FROM ";
	$sql .= " tiponota pc ";
	$sql .= " inner join dominio d on d.codigodominio = pc.codigodominio ";
	$sql .= " WHERE 1=1 ";

	if (isset($codigotiponota)) {
		$sql .= " and codigotiponota = '".$codigotiponota."' ";
	}
	$sql .= " order by pc.orden ";

	$tiponota = null;
	$rs = mysql_query($sql);
	while ($row = mysql_fetch_assoc($rs)) {
		$tiponota = $row;
	}
	return $tiponota;
}

function consultarTiposNotaByPadre($codigotiponotapadre) {
	$sql = "";
	$sql .= " SELECT ";
	$sql .= " d.codigoreferencia as codigoreferenciadominio,  ";
	$sql .= " d.columna,  ";
	$sql .= " d.componente,  ";
	$sql .= " pc.*  ";
	$sql .= " FROM ";
	$sql .= " tiponota pc ";
	$sql .= " inner join dominio d on d.codigodominio = pc.codigodominio ";
	$sql .= " WHERE 1=1 ";

	if (isset($codigotiponotapadre)) {
		$sql .= " and codigotiponotapadre = '".$codigotiponotapadre."' ";
	}
	$sql .= " order by pc.orden ";

	$tiposnota = array();
	$rs = mysql_query($sql);
	$numrow = 1;
	while ($row = mysql_fetch_assoc($rs)) {
		$row['numrow'] = $numrow;
		$numrow++;
		$tiposnota[] = $row;
	}
	return $tiposnota;
}


function consultarTipoParcial($codigotipoparcial) {
	$sql = "";
	$sql .= " SELECT";
	$sql .= " codigotipoparcial,nombre,descripcion,codigoreferencia,estado";
	$sql .= " FROM ";
	$sql .= " TIPOPARCIAL ";
	$sql .= " WHERE 1=1 ";
	$sql .= " AND codigotipoparcial = '".$codigotipoparcial."'";
	
	$rs = mysql_query($sql);
	$tipoparcial = null;
	while ($row = mysql_fetch_assoc($rs)) {
	   $tipoparcial = $row;
	}
	return $tipoparcial;
}

function consultarParcial($codigoparcial) {
	$sql = "";
	$sql .= " SELECT";
	$sql .= " codigoparcial,nombre,descripcion,codigoreferencia,tipocomponente,titleid,estado";
	$sql .= " FROM ";
	$sql .= " PARCIAL ";
	$sql .= " WHERE 1=1 ";
	$sql .= " AND codigoparcial = '".$codigoparcial."'";
	
	$rs = mysql_query($sql);
	$parcial = null;
	while ($row = mysql_fetch_assoc($rs)) {
	   $parcial = $row;
	}
	return $parcial;
}

function consultarTiposNota($codigotiponota) {
	$sql = "";
	$sql .= " SELECT";
	$sql .= " pc.codigotiponota, pc.codigotiponotapadre, pc.codigoperiodo, pc.codigodominio, pc.codigoreferencia, pc.orden, pc.estado, pc.descripcion, ";
	$sql .= " d.codigoreferencia as codigoreferenciadominio, d.componente, d.componenteid ";
	$sql .= " FROM ";
	$sql .= " tiponota pc";
	$sql .= " inner join dominio d on d.codigodominio = pc.codigodominio";
	$sql .= " WHERE 1=1 ";
	$sql .= " AND codigotiponota = '".$codigotiponota."'";
	
	//echo $sql;
	
	$rs = mysql_query($sql);
	$tiponota = null;
	while ($row = mysql_fetch_assoc($rs)) {
	   $tiponota = $row;
	}
	return $tiponota;
}

function consultarPeriodo() {
	$sql = "";
	$sql .= " SELECT";
	$sql .= " P.codigoperiodo, DATE_FORMAT(P.fechainicio,'%Y-%m-%d') as fechainicio, DATE_FORMAT(P.fechafin,'%Y-%m-%d') as fechafin, P.estado, P.anio";
	$sql .= " FROM ";
	$sql .= " PERIODO P";
	$sql .= " WHERE 1=1 AND ESTADO = '1'";
	
	$rs = mysql_query($sql);
	
	$periodo = null;
	while ($row = mysql_fetch_assoc($rs)) {
	   $periodo = $row;
	}
	
	return $periodo;
}

function consultarEstudiante($cedula) {
	$sql = "";
	$sql .= " SELECT";
	$sql .= " * ";
	$sql .= " FROM ";
	$sql .= " ESTUDIANTE E";
	$sql .= " WHERE 1=1 AND E.CEDULA = '".$cedula."'";
	
	$rs = mysql_query($sql);
	
	$estudiante = null;
	while ($row = mysql_fetch_assoc($rs)) {
	   $estudiante = $row;
	}
	
	return $estudiante;
}

function consultarCursoByParams($params) {
	
	if (is_null($params)) {
		return null;
	}
	
	$sql = "";
	$sql .= " SELECT ";
	$sql .= " c.* ";
	$sql .= " FROM ";
	$sql .= " curso c ";
	$sql .= " WHERE 1=1 ";

	if (isset($params->codigotipocurso)) {
		$sql .= " and c.codigotipocurso = '".$params->codigotipocurso."' ";
	}
	if (isset($params->codigomateria)) {
		$sql .= " and c.codigomateria = '".$params->codigomateria."' ";
	}
	if (isset($params->codigodocente)) {
		$sql .= " and c.codigodocente = '".$params->codigodocente."' ";
	}
	if (isset($params->codigoparalelo)) {
		$sql .= " and c.codigoparalelo = '".$params->codigoparalelo."' ";
	}
	if (isset($params->codigoperiodo)) {
		$sql .= " and c.codigoperiodo = '".$params->codigoperiodo."' ";
	}
	
	//echo $sql;
	
	$curso = null;
	$rs = mysql_query($sql);
	while ($row = mysql_fetch_assoc($rs)) {
		$curso = $row;
	}
	return $curso;
}

function consultarCursoEstudianteByParams($params) {
	
	if (is_null($params)) {
		return null;
	}
	
	$sql = "";
	$sql .= " SELECT ";
	$sql .= " c.* ";
	$sql .= " FROM ";
	$sql .= " cursoestudiante c ";
	$sql .= " WHERE 1=1 ";

	if (isset($params->codigocurso)) {
		$sql .= " and c.codigocurso = '".$params->codigocurso."' ";
	}
	if (isset($params->codigoestudiante)) {
		$sql .= " and c.codigoestudiante = '".$params->codigoestudiante."' ";
	}
	
	//echo $sql;
	
	$cursoestudiante = null;
	$rs = mysql_query($sql);
	while ($row = mysql_fetch_assoc($rs)) {
		$cursoestudiante = $row;
	}
	return $cursoestudiante;
}

function consultarCursoEstudianteNotaByParams($params) {
	
	if (is_null($params)) {
		return null;
	}
	
	$sql = "";
	$sql .= " SELECT ";
	$sql .= " c.* ";
	$sql .= " FROM ";
	$sql .= " cursoestudiantenotas c ";
	$sql .= " WHERE 1=1 ";

	if (isset($params->codigocurso)) {
		$sql .= " and c.codigocurso = '".$params->codigocurso."' ";
	}
	if (isset($params->codigoestudiante)) {
		$sql .= " and c.codigoestudiante = '".$params->codigoestudiante."' ";
	}
	if (isset($params->codigotiponota)) {
		$sql .= " and c.codigotiponota = '".$params->codigotiponota."' ";
	}
	
	//echo $sql;
	
	$cursoestudiante = null;
	$rs = mysql_query($sql);
	while ($row = mysql_fetch_assoc($rs)) {
		$cursoestudiante = $row;
	}
	return $cursoestudiante;
}

function insertCursoEstudianteNota($params) {
	if (is_null($params)) {
		return null;
	}
	
	$sql = "";
	$sql .= " INSERT INTO cursoestudiantenotas ( codigocurso, codigoestudiante, codigotiponota,  valor)";
	$sql .= " VALUES ";
	$sql .= " ( ";
	$sql .= "'".$params->codigocurso."'";
	$sql .= ",";
	$sql .= "'".$params->codigoestudiante."'";
	$sql .= ",";
	$sql .= "'".$params->codigotiponota."'";
	$sql .= ",";
	$sql .= "'".$params->valornota."'";
	$sql .= " ) ";
	
	//echo $sql;

	$rs = mysql_query($sql);
	
	$codigocursoestudiantenotas = mysql_insert_id();
	
	return $codigocursoestudiantenotas;
}

function updateCursoEstudianteNota($params) {
	if (is_null($params)) {
		return null;
	}
	
	$sql = "";
	$sql .= " UPDATE cursoestudiantenotas SET valor = '".$params->valornota."' WHERE codigocursoestudiantenotas = '".$params->codigocursoestudiantenotas."'";
	
	//echo $sql;
	
	$rs = mysql_query($sql);
	
	return $rs;
}

function deleteCursoEstudianteNota($params) {
	if (is_null($params)) {
		return null;
	}
	
	$sql = "";
	$sql .= " DELETE FROM cursoestudiantenotas WHERE codigocursoestudiantenotas = '".$params->codigocursoestudiantenotas."'";
	
	//echo $sql;
	
	$rs = mysql_query($sql);
	
	return $rs;
}

function consultarPermisoPorID ($id) {
	$sql = "SELECT * FROM PERMISO WHERE 1=1 AND CODIGOPERMISO = '".$id."'";
	$rs = mysql_query($sql);
	$permiso = null;
	while ($row = mysql_fetch_assoc($rs)) {
	   $permiso = $row;
	}
	return $permiso;
}

function consultarOpcionesUsuario($codigousuario) {
	$sql = "";
	$sql .= " select distinct";
	$sql .= " u.codigousuario, r.codigorol, o.codigoopcion, o.nombre, o.descripcion, o.estado, o.url, o.referencia";
	$sql .= " from usuario_rol ur ";
	$sql .= " inner join rol_opcion ro on (ur.codigorol = ro.codigorol) ";
	$sql .= " inner join opcion o on (o.codigoopcion = ro.codigoopcion)";
	$sql .= " inner join rol r on (r.codigorol = ro.codigorol)";
	$sql .= " inner join usuario u on (u.codigousuario = ur.codigousuario)";
	$sql .= " where 1=1";
	$sql .= " and u.codigousuario = '".$codigousuario."'";
	
	$rs = mysql_query($sql);
	
	$opciones = array();
	while ($row = mysql_fetch_assoc($rs)) {
	   $opciones[] = $row;
	}
	return $opciones;
}

function consultarEmpleadoPorCedula($cedula) {
	$sql = "";
	$sql .= "select ";
	$sql .= "e.*, CONCAT(e.nombres, ' ', e.apellidos) AS nombrecompleto ";
	$sql .= "from empleado e ";
	$sql .= "where e.estado = '1' and e.cedula = '".$cedula."'";
	
	$rs = mysql_query($sql);
	
	$empleado = null;
	while ($row = mysql_fetch_assoc($rs)) {
	   $empleado = $row;
	}
	return $empleado;
}

function consultarEmpleadoPorUsuarioBiometrico($codigousuariobiometrico) {

	$sql = "select e.* from empleado e where e.estado = '1' and  e.codigousuariobiometrico = '".$codigousuariobiometrico."'";
	
	$rs = mysql_query($sql);
	
	$empleado = null;
	while ($row = mysql_fetch_assoc($rs)) {
	   $empleado = $row;
	}
	return $empleado;
}

function consultarUsuarioPorUsername($username) {

	$sql = "select distinct u.*, e.codigoempleado from usuario u left join empleado e on (e.codigousuario = u.codigousuario) where u.username = '".$username."'";
	
	$rs = mysql_query($sql);
	
	$usuario = null;
	while ($row = mysql_fetch_assoc($rs)) {
	   $usuario = $row;
	}
	return $usuario;
}

function consultarValorParametro($codigoReferencia) {

	$sql = "select p.* from parametros p where p.codigoreferencia = '".$codigoReferencia."'";
	
	$rs = mysql_query($sql);
	
	$parametro = null;
	while ($row = mysql_fetch_assoc($rs)) {
	   $parametro = $row;
	}
	return $parametro;
}

function consultarTipoContrato($codigoReferencia) {

	$sql = "select * from CONTRATOTIPO tc where tc.codigoreferencia = '".$codigoReferencia."'";
	
	$rs = mysql_query($sql);
	
	$tipocontrato = null;
	while ($row = mysql_fetch_assoc($rs)) {
	   $tipocontrato = $row;
	}
	return $tipocontrato;
}

function consultarContratoEmpleado($cedula) {

	$sql = " ";
	$sql .= " SELECT C.* ";
	$sql .= " FROM CONTRATO C ";
	$sql .= " INNER JOIN EMPLEADO E ON E.CODIGOEMPLEADO = C.CODIGOEMPLEADO";
	$sql .= " WHERE 1=1";
	$sql .= " AND C.ESTADO = '1'";
	$sql .= " AND E.CEDULA = '".$cedula."'";
	
	$rs = mysql_query($sql);
	
	$contrato = null;
	while ($row = mysql_fetch_assoc($rs)) {
	   $contrato = $row;
	}
	return $contrato;
}

function consultarNotas($tiponota) {

	$sql = armarSQLNotas($tiponota);
	
	//echo $sql;

	$rs = mysql_query($sql);
	
	$numrow = 1;

	$estudiantesNotas = array();

	while ($row = mysql_fetch_array($rs)) {
		if (isset($estudiantesNotas[$row['cedula']])) {
			
			$estudiante = $estudiantesNotas[$row['cedula']];
			
			$estudiante[$row['columna']] = $row['valornota'];
			
			$estudiantesNotas[$row['cedula']] = $estudiante;
		} else {
			$estudiante = array();
			
			$estudiante['numrow'] = ($numrow);
			$estudiante['cedula'] = $row['cedula'];
			$estudiante['nombrecompleto'] = $row['nombre'].' '.$row['apellido'];
			$estudiante['descripcion'] = $row['descripcion'];
			
			$estudiante[$row['columna']] = $row['valornota'];
			
			$estudiantesNotas[$row['cedula']] = $estudiante;
			
			$numrow++;
		}
	}

	$notas = array();
	foreach($estudiantesNotas as $key=>$value) {
		$notas[] = $value;
	}
	return $notas;
}

function armarSQLNotas($tiponota) {

	$sql = " ";
	$sql .= " select ";
	$sql .= " t1.*, ";
	$sql .= " n.valor as valornota ";
	$sql .= " from ";
	$sql .= " ( ";
	$sql .= " select ";
	$sql .= " e.codigoestudiante, e.cedula, e.nombre, e.apellido, a.* ";
	$sql .= " from estudiante e, ";
	$sql .= " ( ";
	$sql .= " select d.codigoreferencia as codigoreferenciadominio, d.columna, pc.*  ";
	$sql .= " from tiponota pc ";
	$sql .= " inner join dominio d on d.codigodominio = pc.codigodominio ";
	$sql .= " where 1=1 ";
	if (isset($tiponota->codigotiponota)) {
	$sql .= " and pc.codigotiponota = '".$tiponota->codigotiponota."' ";
	}
	if (isset($tiponota->codigotiponotapadre)) {
	$sql .= " and pc.codigotiponotapadre = '".$tiponota->codigotiponotapadre."' ";
	}
	$sql .= " order by d.nivel, pc.orden ";
	$sql .= " ) a ";
	$sql .= " ) t1 ";
	$sql .= " left join cursoestudiantenotas n on (n.codigoestudiante = t1.codigoestudiante and  n.codigotiponota = t1.codigotiponota) ";
	$sql .= " where 1=1 ";

	return $sql;
}



?>