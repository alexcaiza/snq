<?php
header('Content-type: application/json; charset=ISO-8859-1');
date_default_timezone_set('America/Bogota');

include_once("../conectar.php");
include_once("../fechas.php");

$data = array();

$method = $_SERVER['REQUEST_METHOD'];
$params = json_decode(stripslashes($_REQUEST['params']));

$page = $_REQUEST['page'];
$start = $_REQUEST['start'];
$limit = $_REQUEST['limit'];

$data['params'] = $params;
$data['page'] = $page;
$data['start'] = $start;
$data['limit'] = $limit;

$sql = "";
$sql .= " SELECT ";
$sql .= " d.*, u.*";
$sql .= " FROM docente d";
$sql .= " LEFT JOIN usuario u on u.codigousuario = d.codigousuario";
$sql .= " WHERE 1=1 ";
$sql .= " LIMIT $start, $limit";

$rs = mysql_query($sql);

$docentes = array();
$numrow = 1;
while ($row = mysql_fetch_assoc($rs)) {
	$row['numrow'] = ($start + $numrow);
	
	$numrow++;
	$docentes[] = $row;
}
$data['docentes'] = $docentes;

$data['sql'] = $sql;

$sql = "";
$sql .= " SELECT ";
$sql .= " COUNT(*)";
$sql .= " FROM docente A ";
$sql .= " WHERE 1=1 ";

$rsTotal = mysql_query($sql);
$rowTotal = mysql_fetch_row($rsTotal);
$totalCount = $rowTotal[0];

$data['sqlCount'] = $sql;
$data['totalCount'] = $totalCount;
$data['mensaje'] = mysql_errno() == 0 ? 'success': mysql_error();
$data['success'] = mysql_errno() == 0;

echo json_encode($data);

?>