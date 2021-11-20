
<?php

//INCLUIR CONECÃO
include_once('conexao.php');

//FAZER A CONSULTA

// $query= $pdo->query("SELECT * from usuarios order by id desc limit $postjson[start], $postjson[limit] ");

$query= $pdo->query("SELECT * from usuarios order by id desc  ");


 // PASSAR OS DADOS RECEBIDOS NA CONSULTA PARA UMA ARRAY

 $res = $query->fetchALL(PDO::FETCH_ASSOC);

 for ($i=0; $i < count($res); $i++) {
 	foreach ($res[$i] as $key => $value) {
 		// code...
 	}


// ESSE DADOS VAI SER REPASSADOS PARA A APLICAÇÃO
 	$dados[] = array (

 		'id' => $res[$i]['id'],
 		'nome' => $res[$i]['nome'],
 		'email' => $res[$i]['email'],
 		'senha' => $res[$i]['senha'],
 	
 	);
 }

 //CRIAR CONDIÇÃO SE ENCONTRA ALGUM REGISTRO (maior que 0) PASSA OS DADOS ($dados) AO CONTRARIO PASSA ZERO (0)

 if (count($res) > 0 ){

 	$result = json_encode(array('sucess' => true, 'result'=> $dados));
 }else{
 	$result = json_encode(array('sucess' => false, 'result'=> 0));

 }

 echo $result;

 

?>