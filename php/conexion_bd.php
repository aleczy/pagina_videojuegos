<?php
// Establishing connection with server by passing "server_name", "user_id", "password".
$connection = mysql_connect("localhost", "root", "");
// Selecting Database by passing "database_name" and above connection variable.
$db = mysql_select_db("amazon", $connection);
$name2=$_POST['name1']; // Fetching Values from URL
$email2=$_POST['email1'];
$telefono2=$_POST['telefono1'];
$comentarios2=$_POST['comentarios1'];
$query = mysql_query("insert into usuarios_comentarios(nombre, email, telefono, comentarios) values ('$name2','$email2','$telefono2','$comentarios2')"); //Insert query
if($query){

echo ("La informacion se almaceno correctamente");
}else{

}
mysql_close($connection); // Connection Closed.
?>