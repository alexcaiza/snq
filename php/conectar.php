<?php
$servidor = "127.0.0.1";
$user = "root";
$password = "root";
$db = "snq";
$conexion = mysql_connect($servidor, $user, $password) or die (mysql_error());
$banco = mysql_select_db($db, $conexion) or die (mysql_error());
?>