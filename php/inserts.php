<?php
include("conectar.php");

function insertVacaciones ($codigousuario, $codigoperiodo, $codigoempleado, $anio, $estado, $fechadesde, $fechahasta, $horadesde, $horahasta, $valortiempo, $tipoorigen, $tipotiempo) {
	$sql = "";
	$sql .= " insert into ";
	$sql .= " vacaciones(codigousuario, codigoperiodo, codigoempleado, anio, estado, fechadesde, fechahasta, horadesde, horahasta, valortiempo, tipoorigen, tipotiempo) ";
	$sql .= " values(";
	if (isset($codigousuario) && $codigousuario != '') {
		$sql .= "'".$codigousuario."',";
	} else {
		$sql .= "null,";
	}
	if (isset($codigoperiodo) && $codigoperiodo != '') {
		$sql .= "'".$codigoperiodo."',";
	} else {
		$sql .= "null,";
	}
	if (isset($codigoempleado) && $codigoempleado != '') {
		$sql .= "'".$codigoempleado."',";
	} else {
		$sql .= "null,";
	}
	if (isset($anio) && $anio != '') {
		$sql .= "'".$anio."',";
	} else {
		$sql .= "null,";
	}
	if (isset($estado) && $estado != '') {
		$sql .= "'".$estado."',";
	} else {
		$sql .= "null,";
	}
	if (isset($fechadesde) && $fechadesde != '') {
		$sql .= "'".$fechadesde."',";
	} else {
		$sql .= "null,";
	}
	if (isset($fechahasta) && $fechahasta != '') {
		$sql .= "'".$fechahasta."',";
	} else {
		$sql .= "null,";
	}
	if (isset($horadesde) && $horadesde != '') {
		$sql .= "'".$horadesde."',";
	} else {
		$sql .= "null,";
	}
	if (isset($horahasta) && $horahasta != '') {
		$sql .= "'".$horahasta."',";
	} else {
		$sql .= "null,";
	}
	if (isset($valortiempo) && $valortiempo != '') {
		$sql .= "'".$valortiempo."',";
	} else {
		$sql .= "null,";
	}
	if (isset($tipoorigen) && $tipoorigen != '') {
		$sql .= "'".$tipoorigen."',";
	} else {
		$sql .= "null,";
	}
	if (isset($tipotiempo) && $tipotiempo != '') {
		$sql .= "'".$tipotiempo."'";
	} else {
		$sql .= "null";
	}
	$sql .= ")";
	
	$rs = mysql_query($sql);
	
	$codigovacaciones = mysql_insert_id();
	
	return $codigovacaciones;
}

function insertVacacionesEstado ($codigovacaciones, $vacacionesestado, $fechainicio, $fechafin, $descripcion, $estado) {
	$fechainicio = date("Y-m-d H:i:s"); 
		
	$sqlVE = "";
	$sqlVE .= " insert into ";
	$sqlVE .= " vacacionesestado(codigovacaciones, vacacionesestado, fechainicio, fechafin, descripcion, estado) ";
	$sqlVE .= " values(";
	if (isset($codigovacaciones) && $codigovacaciones != '') {
		$sqlVE .= "'".$codigovacaciones."',";
	} else {
		$sqlVE .= "null, ";
	}
	if (isset($vacacionesestado) && $vacacionesestado != '') {
		$sqlVE .= "'".$vacacionesestado."',";
	} else {
		$sqlVE .= "null, ";
	}
	if (isset($fechainicio) && $fechainicio != '') {
		$sqlVE .= "'".$fechainicio."', ";
	} else {
		$sqlVE .= "null, ";
	}
	if (isset($fechafin) && $fechafin != '') {
		$sqlVE .= "'".$fechafin."', ";
	} else {
		$sqlVE .= "null, ";
	}
	if (isset($descripcion) && $descripcion != '') {
		$sqlVE .= "'".$descripcion."',";
	} else {
		$sqlVE .= "null,";
	}
	if (isset($estado) && $estado != '') {
		$sqlVE .= "'".$estado."'";
	} else {
		$sqlVE .= "null";
	}
	$sqlVE .= ") ";
	
	$rs = mysql_query($sqlVE);
	
	$codigovacacionesestado = mysql_insert_id();
	
	return $codigovacacionesestado;
}

?>