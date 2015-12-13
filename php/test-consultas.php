<?php
include_once("conectar.php");
include_once("consultas.php");

$notas = consultarNotas(6);

print_r($notas);



?>