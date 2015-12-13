<?php
header('Content-type: application/json; charset=ISO-8859-1');
date_default_timezone_set('America/Bogota');

include_once("../conectar.php");
include_once("../consultas.php");

$method = $_SERVER['REQUEST_METHOD'];
$params = json_decode(stripslashes($_REQUEST['params']));

$page = $_REQUEST['page'];
$start = $_REQUEST['start'];
$limit = $_REQUEST['limit'];

$data = array();

$data['params'] = $params;
$data['page'] = $page;
$data['start'] = $start;
$data['limit'] = $limit;

$notas = null;
if (isset($params->codigotiponotapadre) && $params->codigotiponotapadre != '') {
	$notas = consultarNotas($params->codigotiponotapadre);
}
$data['estudiantes'] = $notas;

$sql  = " ";
$sql .= " SELECT COUNT(*) AS TOTAL FROM ESTUDIANTE E ";
$sql .= " WHERE 1=1 ";
$sql .= " AND E.ESTADO = '1' ";

$rsTotal = mysql_query($sql);
$rowTotal = mysql_fetch_row($rsTotal);
//$totalCount = $rowTotal[0];
$totalCount = 1000;

$data['sqlCount'] = $sql;
$data['totalCount'] = $totalCount;
$data['mensaje'] = mysql_errno() == 0 ? 'success': mysql_error();
$data['success'] = mysql_errno() == 0;

echo json_encode($data);

?>