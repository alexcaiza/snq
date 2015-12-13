<?php
header('Content-type: application/json; charset=ISO-8859-1');
date_default_timezone_set('America/Bogota');

include_once("../conectar.php");

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

$nombres = "";
$apellidos = "";
$cedula = "";
$genero = "";

$sql = "";
$sql .= " SELECT ";
$sql .= " * ";
$sql .= " FROM ESTUDIANTE E ";
$sql .= " WHERE 1=1 ";
$sql .= " AND E.ESTADO = '1' ";
$sql = $sql." LIMIT $start, $limit";

$data['estudiantes'] = array();

$rs = mysql_query($sql); // or die (mysql_error());
$numrow = 1;
while ($row = mysql_fetch_assoc($rs)) {
	$row['numrow'] = ($start + $numrow);
	$row['nombrecompleto'] = $row['nombre'].' '.$row['apellido'];
	$row['nota1'] = '10';
	$row['nota2'] = '9';
	$row['nota3'] = '8';
	$row['nota4'] = '7';
	$row['nota5'] = '7';
	$row['promedio1'] = '10';
	$row['promedio2'] = '10';
	$row['promedio'] = '10';
	$row['supletorio'] = '0';
	
	$numrow++;
	$data['estudiantes'][] = $row;
}

$data['sql'] = $sql;

$sql  = " ";
$sql .= " SELECT COUNT(*) AS TOTAL FROM ESTUDIANTE E ";
$sql .= " WHERE 1=1 ";
$sql .= " AND E.ESTADO = '1' ";

$rsTotal = mysql_query($sql);
$rowTotal = mysql_fetch_row($rsTotal);
$totalCount = $rowTotal[0];

$data['sqlCount'] = $sql;
$data['totalCount'] = $totalCount;
$data['mensaje'] = mysql_errno() == 0 ? 'success': mysql_error();
$data['success'] = mysql_errno() == 0;

echo json_encode($data);

?>