<?php
include("../conectar.php");

$method = $_SERVER['REQUEST_METHOD'];

$params = json_decode(stripslashes($_POST['params']));

//busqueda de roles
$sqlRoles = "";
$sqlRoles .= " SELECT ";
$sqlRoles .= " R.*";
$sqlRoles .= " FROM ROL R";
$sqlRoles .= " WHERE 1=1";
	
$rsRoles = mysql_query($sqlRoles);

$roles = array();
if (mysql_num_rows($rsRoles) > 0) {
	while ($row = mysql_fetch_assoc($rsRoles)) {
	   $roles[] = $row;
	}
}

//busqueda de roles de usuario

//$sql = sprintf("SELECT * FROM EMPLEADO WHERE CEDULA = '%s'", mysql_real_escape_string($params->cedula) );
$sqlUsuarioRoles = "";
$sqlUsuarioRoles .= " SELECT ";
$sqlUsuarioRoles .= " UR.*";
$sqlUsuarioRoles .= " FROM USUARIO_ROL UR";
$sqlUsuarioRoles .= " WHERE 1=1";
$sqlUsuarioRoles .= " AND UR.CODIGOUSUARIO = '".mysql_real_escape_string($params->codigousuario)."'";

$rsUsuarioRoles = mysql_query($sqlUsuarioRoles);

$usuarioRoles = array();
if (mysql_num_rows($rsUsuarioRoles) > 0) {
	while ($row = mysql_fetch_assoc($rsUsuarioRoles)) {
	   $usuarioRoles[] = $row;
	}
}

$data = array();
$data['sqlRoles'] = $sqlRoles;
$data['sqlUsuarioRoles'] = $sqlUsuarioRoles;
$data['roles'] = $roles;
$data['usuarioRoles'] = $usuarioRoles;
$data['mensaje'] = mysql_errno() == 0 ? 'OK': mysql_error();
$data['success'] = mysql_errno() == 0;
$data['method'] = $method;

echo json_encode($data);

?>