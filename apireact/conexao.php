<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Request-With');
header('Content-Type: application/json; charset=utf-8');

$banco = 'atena';
$host = 'localhost';
$usuario = 'carlos';
$senha = 'casb';

// tratamento de ERRo
try {
	
	$pdo = new PDO ("mysql:dbname=$banco;host=$host", "$usuario", "$senha" );
}catch (Exception $e){
	
	echo 'Erro ao conectar Banco !!'. $e;
}
?>

