<?php
header('Content-type: application/json; charset=ISO-8859-1');
date_default_timezone_set('America/Bogota');

include_once("../conectar.php");

$data = array();

$sql = "";
$sql .= " select ";
$sql .= " c.*, CONCAT(m.nombre, ' ', p.nombre) AS nombrecurso ";
$sql .= " from ";
$sql .= " curso c ";
$sql .= " inner join paralelo p on p.codigoparalelo = c.codigoparalelo ";
$sql .= " inner join materia m on m.codigomateria= c.codigomateria ";
$sql .= " inner join periodoacademico pa on pa.codigoperiodoacademico = c.codigoperiodoacademico ";

$data['cursos'] = array();

$rs = mysql_query($sql);
$numrow = 1;
while ($row = mysql_fetch_assoc($rs)) {
	$row['numrow'] = $numrow;
	$numrow++;
	$data['cursos'][] = $row;
}

$data['sql'] = $sql;
$data['mensaje'] = mysql_errno() == 0 ? 'success' : mysql_error();
$data['success'] = mysql_errno() == 0;

echo json_encode($data);

?>