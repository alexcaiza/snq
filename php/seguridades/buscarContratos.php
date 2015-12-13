<?php
include("../conectar.php");
include("../funciones.php");

$method = $_SERVER['REQUEST_METHOD'];

$params = json_decode(stripslashes($_POST['params']));

// Consulta sql
$sql = "";
$sql .= " SELECT DISTINCT ";
$sql .= " C.codigocontrato, C.codigoempleado, DATE_FORMAT(C.fechainicio,'%Y-%m-%d') as fechainicio, DATE_FORMAT(C.fechafin,'%Y-%m-%d') as fechafin, C.estado, ";
$sql .= " C.valorhora, C.codigohorario, C.codigoperiodo, C.numerohoras, E.cedula, CONCAT(E.nombres, ' ', E.apellidos) AS nombrecompleto, P.anio ";
$sql .= " FROM CONTRATO C ";
$sql .= " INNER JOIN EMPLEADO E ON (C.CODIGOEMPLEADO = E.CODIGOEMPLEADO) INNER JOIN PERIODO P ON (P.CODIGOPERIODO = C.CODIGOPERIODO)";
$sql .= " WHERE 1=1";
	
$rs = mysql_query($sql);

$contratos = array();
while ($row = mysql_fetch_assoc($rs)) {
   $contratos[] = $row;
}

//Llamar a la funcion operaciones
$sumar = operaciones(5, 7, "Sumar");

$data = array();

$data['sql'] = $sql;

$data['contratos'] = $contratos;

$data['mensaje'] = mysql_errno() == 0 ? 'OK': mysql_error();

$data['success'] = mysql_errno() == 0;

$data['method'] = $method;

$data['operacion'] = $sumar;

echo json_encode($data);

?>