<?php
include("../conectar.php");

$method = $_SERVER['REQUEST_METHOD'];

$params = json_decode(stripslashes($_POST['horario']));

// Consulta sql
$sql = sprintf("INSERT INTO HORARIODETALLE (CODIGOHORARIO, CODIGODIA, NOMBREDIA, NUMEROHORAS, HORAINICIO, HORAFIN) VALUES ('%s','%s','%s','%s','%s','%s')", 
	mysql_real_escape_string($params->codigohorario), 
	mysql_real_escape_string($params->codigodia),
	mysql_real_escape_string($params->nombredia),
	mysql_real_escape_string($params->numerohoras),
	mysql_real_escape_string($params->horainicio),
	mysql_real_escape_string($params->horafin)
	);
	
$rs = mysql_query($sql);

$data = array();
$data['sql'] = $sql;
$data['codigodetallehorario'] = mysql_insert_id();
$data['mensaje'] = mysql_errno() == 0 ? 'OK': mysql_error();
$data['success'] = mysql_errno() == 0;
$data['error'] = mysql_error();
$data['method'] = $method;

echo json_encode($data);

?>