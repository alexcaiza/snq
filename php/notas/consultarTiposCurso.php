<?php
header('Content-type: application/json; charset=ISO-8859-1');
date_default_timezone_set('America/Bogota');

include_once("../conectar.php");

$data = array();

$sql = "";
$sql .= " select ";
$sql .= " * ";
$sql .= " from ";
$sql .= " tipocurso tc ";

$data['tiposcurso'] = array();

$rs = mysql_query($sql);
$numrow = 1;
while ($row = mysql_fetch_assoc($rs)) {
	$row['numrow'] = $numrow;
	$numrow++;
	$data['tiposcurso'][] = $row;
}

$data['sql'] = $sql;
$data['mensaje'] = mysql_errno() == 0 ? 'success' : mysql_error();
$data['success'] = mysql_errno() == 0;

echo json_encode($data);

?>