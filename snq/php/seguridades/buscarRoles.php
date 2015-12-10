<?php
include("../conectar.php");

$method = $_SERVER['REQUEST_METHOD'];

$params = json_decode(stripslashes($_POST['params']));

$nombre = $params->nombre;
$estado = $params->estado;

$sql = "";
$sql .= " SELECT ";
$sql .= " * ";
$sql .= " FROM ROL R";
$sql .= " WHERE 1=1";
if (!is_null($nombre) && $nombre != '') {
	$sql .= " AND R.nombre LIKE '%".$nombre."%'";
}
if (!is_null($estado) && $estado != '') {
	$sql .= " AND R.estado = '".$estado."'";
}
	
$rs = mysql_query($sql);

$roles = array();
if (mysql_num_rows($rs) > 0) {
	while ($row = mysql_fetch_assoc($rs)) {
	   $roles[] = $row;
	}
}

$data = array();

$data['sql'] = $sql;
$data['roles'] = $roles;
$data['mensaje'] = mysql_errno() == 0 ? 'OK': mysql_error();
$data['success'] = mysql_errno() == 0;
$data['method'] = $method;
$data['params'] = $params;

echo json_encode($data);

?>