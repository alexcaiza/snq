<?php
include_once("conectar.php");
include_once("consultas.php");

$sql = mysql_query('SELECT * FROM estudiante');

$associativeArray = array();
while($row = mysql_fetch_array($sql)){
   // Put the values into the array, no otehr variables needed
   $associativeArray[$row['cedula']] = $row['nombre'];
}

foreach($associativeArray as $k => $id){
    echo $k."=>".$id;
}



?>