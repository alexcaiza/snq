<?php
include("../conectar.php");

$method = $_SERVER['REQUEST_METHOD'];

$params = json_decode(stripslashes($_POST['params']));

$cedula = $params->cedula;
$nombres = $params->nombres;
$apellidos = $params->apellidos;
$username = $params->username;
$estado = $params->estado;

$sql = "";
$sql .= " SELECT ";
$sql .= " E.estado, E.cedula, CONCAT(E.nombres, ' ', E.apellidos) AS  nombrecompleto, E.codigousuario, ";
$sql .= " E.codigoempleado, E.nombres, E.apellidos, ";
$sql .= " U.username ";
$sql .= " FROM EMPLEADO E";
$sql .= " LEFT JOIN USUARIO U ON (U.codigousuario = E.codigousuario)";
$sql .= " WHERE 1=1";
if (!is_null($cedula) && $cedula != '') {
	$sql .= " AND E.cedula LIKE '%".$cedula."%'";
}
if (!is_null($nombres) && $nombres != '') {
	$sql .= " AND E.nombres LIKE '%".$nombres."%'";
}
if (!is_null($apellidos) && $apellidos != '') {
	$sql .= " AND E.apellidos LIKE '%".$apellidos."%'";
}
if (!is_null($username) && $username != '') {
	$sql .= " AND U.username LIKE '%".$username."%'";
}
if (!is_null($estado) && $estado != '') {
	$sql .= " AND E.estado = '".$estado."'";
}
	
$rs = mysql_query($sql);

$usuarios = array();
if (mysql_num_rows($rs) > 0) {
	while ($row = mysql_fetch_assoc($rs)) {
	   $usuarios[] = $row;
	}
}

$data = array();

$data['sql'] = $sql;
$data['usuarios'] = $usuarios;
$data['mensaje'] = mysql_errno() == 0 ? 'OK': mysql_error();
$data['success'] = mysql_errno() == 0;
$data['method'] = $method;
$data['params'] = $params;
$data['cedula'] = $cedula;
$data['username'] = $username;

echo json_encode($data);

?>