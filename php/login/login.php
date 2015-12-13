<?php
include_once("../conectar.php");
include_once("../consultas.php");

header('Content-Type: text/html; charset=utf-8');
date_default_timezone_set('America/Bogota');

$method = $_SERVER['REQUEST_METHOD'];
$params = json_decode(stripslashes($_POST['params']));

$data = array();
$data['params'] = $params;

if ($params->accion == 'login') {
	// Consulta sql
	$sql = "";
	$sql .= " select distinct ";
	$sql .= " e.codigoempleado, e.codigousuario, e.nombres, e.apellidos, CONCAT(e.nombres, ' ', e.apellidos) AS  nombrecompleto, e.cedula, e.genero, e.email, "; 
	$sql .= " u.username, u.clave "; 
	$sql .= " from empleado e inner join usuario u on (e.codigousuario = u.codigousuario) "; 
	$sql .= " where ";
	$sql .= " 1=1 and u.estado = '1' and e.estado = '1' ";
	
	if (isset($params->username) && $params->username != '') {
		$sql .= " and u.username = '".$params->username."'";
	}
	
	$rs = mysql_query($sql);

	$user = null;
	while ($row = mysql_fetch_assoc($rs)) {
	   $user = $row;
	}
	
	$password = md5($params->password);
	
	if ($user != null) {
		$data['clave'] = $user['clave'];
		$data['password'] = $password;
		if ($user['clave'] == $password) {
			$opciones = consultarOpcionesUsuario($user['codigousuario']);
			$user['opciones'] = $opciones;
			$data['user'] = $user;
		}
	}

	$data['sql'] = $sql;
	$data['mensaje'] = mysql_errno() == 0 ? 'success' : mysql_error();
	$data['success'] = (mysql_errno() == 0) && ($user != null) && ($password == $user['clave']);
	$data['method'] = $method;
	
}

echo json_encode($data);

?>