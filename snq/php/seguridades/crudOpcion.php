<?php
include("../conectar.php");

$data = array();
$method = $_SERVER['REQUEST_METHOD'];
$params = json_decode(stripslashes($_POST['params']));

if ($params->accion == 'save') {
	$sql = "";
	$sql .= " INSERT INTO   ";
	$sql .= " OPCION (nombre,descripcion,estado,referencia,url) ";
	$sql .= " VALUES ( ";
	$sql .= " '".$params->nombre."', ";
	$sql .= " '".$params->descripcion."', ";
	$sql .= " '".$params->estado."', ";
	$sql .= " '".$params->referencia."', ";
	$sql .= " '".$params->url."'  ";
	$sql .= " ) ";
	
	$rs = mysql_query($sql);
	
	$data['sql'] = $sql;
	$data['mensaje'] = mysql_errno() == 0 ? 'OK': mysql_error();
	$data['success'] = mysql_errno() == 0;
	$data['method'] = $method;
	$data['params'] = $params;
}

else if ($params->accion == 'update') {
	$sql = "";
	$sql .= " UPDATE  ";
	$sql .= " OPCION ";
	$sql .= " SET ";
	$sql .= " nombre = '".$params->nombre."', ";
	$sql .= " descripcion = '".$params->descripcion."', ";
	$sql .= " estado = '".$params->estado."', ";
	$sql .= " referencia= '".$params->referencia."', ";
	$sql .= " url = '".$params->url."'  ";
	$sql .= " WHERE ";
	$sql .= " codigoopcion = '".$params->codigoopcion."'";
	
	$rs = mysql_query($sql);
	
	$data['sql'] = $sql;
	$data['mensaje'] = mysql_errno() == 0 ? 'OK': mysql_error();
	$data['success'] = mysql_errno() == 0;
	$data['method'] = $method;
	$data['params'] = $params;
}

else if ($params->accion == 'disabled') {
	$sql = "";
	$sql .= " UPDATE  ";
	$sql .= " OPCION ";
	$sql .= " SET ";
	$sql .= " estado = '".$params->estado."' ";
	$sql .= " WHERE ";
	$sql .= " codigoopcion = '".$params->codigoopcion."'";
	
	$rs = mysql_query($sql);
	
	$data['sql'] = $sql;
	$data['mensaje'] = mysql_errno() == 0 ? 'OK': mysql_error();
	$data['success'] = mysql_errno() == 0;
	$data['method'] = $method;
	$data['params'] = $params;
}

echo json_encode($data);

?>