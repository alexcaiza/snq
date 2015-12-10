<?php 
$var1 = 'aaa';
$var2 = 'bbb';
$equipo = array('portero'=>'Cech', 'defensa'=>'Terry', 'medio'=>'Lampard', 'delantero'=>'Torres', $var1 = '111', $var2 = '222');
 
foreach($equipo as $key=>$value)
{
echo "El " . $key . " es " . $value;
echo "<br>";
}
?>