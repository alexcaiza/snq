<?php
header('Content-type: application/json; charset=ISO-8859-1');
date_default_timezone_set('America/Bogota');

include_once("../conectar.php");

$params = null;
if (isset($_REQUEST['params'])) {
	$params = json_decode(stripslashes($_REQUEST['params']));
}

$data = array();
$data['params'] = $params;

$sql = "";
$sql .= " SELECT ";
$sql .= " d.codigoreferencia,  ";
$sql .= " d.componente,  ";
$sql .= " pc.*  ";
$sql .= " FROM ";
$sql .= " tiponota pc ";
$sql .= " inner join dominio d on d.codigodominio = pc.codigodominio ";
$sql .= " WHERE 1=1 ";

if (isset($params) && isset($params->nivel)) {
	$sql .= " and d.nivel = '".$params->nivel."'";
}
if (isset($params) && isset($params->codigotiponotapadre)) {
	$sql .= " and codigotiponotapadre = '".$params->codigotiponotapadre."' ";
}
$sql .= " order by pc.orden ";

$datos = array();
$rs = mysql_query($sql);
$numrow = 1;
while ($row = mysql_fetch_assoc($rs)) {
	$row['numrow'] = $numrow;
	$numrow++;
	$datos[] = $row;
}
$data['datos'] = $datos;

$data['sql'] = $sql;
$data['mensaje'] = mysql_errno() == 0 ? 'success' : mysql_error();
$data['success'] = mysql_errno() == 0;

echo json_encode($data);

?>