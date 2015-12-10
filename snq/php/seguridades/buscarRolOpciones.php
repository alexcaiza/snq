<?php

include("../conectar.php");

$data = array();
$opciones = array();
$rolOpciones = array();

$method = $_SERVER['REQUEST_METHOD'];
$params = json_decode(stripslashes($_POST['params']));

$sqlOpciones = null;
$sqlRolOpciones = null;

try {
	//busqueda de roles
	$sqlOpciones = "";
	$sqlOpciones .= " SELECT ";
	$sqlOpciones .= " O.*";
	$sqlOpciones .= " FROM OPCION O";
	$sqlOpciones .= " WHERE 1=1";
		
	$rsOpciones = mysql_query($sqlOpciones);

	if (mysql_num_rows($rsOpciones) > 0) {
		while ($row = mysql_fetch_assoc($rsOpciones)) {
		   $opciones[] = $row;
		}
	}

	//busca las opciones del rol
	if ($params->codigorol != null && $params->codigorol != '') {
		$sqlRolOpciones = "";
		$sqlRolOpciones .= " SELECT ";
		$sqlRolOpciones .= " RO.*";
		$sqlRolOpciones .= " FROM rol_opcion RO";
		$sqlRolOpciones .= " WHERE 1=1";
		$sqlRolOpciones .= " AND RO.CODIGOROL = '".mysql_real_escape_string($params->codigorol)."'";

		$rsRolOpciones = mysql_query($sqlRolOpciones);
		
		if (mysql_num_rows($rsRolOpciones) > 0) {
			while ($row = mysql_fetch_assoc($rsRolOpciones)) {
			   $rolOpciones[] = $row;
			}
		}
	}

	$data['sqlOpciones'] = $sqlOpciones;
	$data['sqlRolOpciones'] = $sqlRolOpciones;
	$data['opciones'] = $opciones;
	$data['rolOpciones'] = $rolOpciones;
	$data['mensaje'] = mysql_errno() == 0 ? 'OK': mysql_error();
	$data['success'] = mysql_errno() == 0;
	$data['params'] = $params;
	$data['method'] = $method;

} catch(Exception $e) {
   $data['exception'] = $e->getMessage();
}

echo json_encode($data);
?>