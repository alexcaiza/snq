<?php
include("../conectar.php");

$method = $_SERVER['REQUEST_METHOD'];

$params = json_decode(stripslashes($_POST['empleado']));

// Consulta sql
$sql = sprintf("SELECT * FROM EMPLEADO WHERE CEDULA = '%s'", mysql_real_escape_string($params->cedula) );
	
$rs = mysql_query($sql);

$empleado = null;
while ($row = mysql_fetch_assoc($rs)) {
   $empleado = $row;
}

$data = array();

$data['sql'] = $sql;

$data['empleado'] = $empleado;

$data['mensaje'] = mysql_errno() == 0 ? 'OK': 'ERROR';

$data['success'] = mysql_errno() == 0;

$data['method'] = $method;

echo json_encode($data);

?>