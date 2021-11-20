<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Request-With');
header('Content-Type: application/json; charset=utf-8');


include_once('conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);

/* 
 $query_buscar = $pdo->query("SELECT * from usuarios where email = '$postjson[email]' ");
 $dados_buscar = $query_buscar->fetchAll(PDO::FETCH_ASSOC);
 if(@count($dados_buscar) > 0){
 	 $result = json_encode(array('success'=>'Email já Cadastrado!'));
 	 echo $result;
 	 exit();
 }else{*/
 	$query = $pdo->prepare("INSERT INTO usuarios SET nome = :nome, email = :email, senha = :senha ");
  
       $query->bindValue(":nome", $postjson['nome']);
       $query->bindValue(":email", $postjson['email']);
       $query->bindValue(":senha", $postjson['senha']);

      
       $query->execute();
  
             
  
      if($query){
        $result = json_encode(array('success'=>true));
  
        }else{
        $result = json_encode(array('success'=>false));
    
        }

        echo $result;
 //}

 
     


?>